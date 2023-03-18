import React, { useState } from "react";
import Calculator from "../components/Calculator";
import Clock from "../components/Clock";
import Exercise from "../components/Exercise";
import { Link } from "react-router-dom";
import { BsChevronDown, BsAlarm } from "react-icons/bs";
import "./Routine.css";
import Labels from "../components/Labels";

function Routine() {
  const [showClock, setShowClock] = useState<boolean>(false);

  const [date, setDate] = useState();
  const [workoutName, setWorkoutName] = useState<string>("Workout Name");
  const [time, setTime] = useState();
  const [totalWeight, setTotalWeight] = useState<number>();
  const [exercises, setExercises] = useState<string[]>([
    "Bench Press",
    "Smith Machine Elevated Front Squat",
    "Bicep Curl",
  ]);
  const [setsAmount, setSetsAmount] = useState<number[]>([3, 3, 3]);

  return (
    <main className="routine">
      <header className="routine__top">
        <div className="routine__navs">
          <BsChevronDown className="routine__down routine__nav" />
          <BsAlarm
            className="routine__nav"
            onClick={() => setShowClock(true)}
          />
        </div>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          className="routine__heading"
          onChange={(event) => setWorkoutName(event.target.value)}
        />
        <div className="routine__navs">
          <Link to="/workout" className="routine__finish">
            Finish
          </Link>
        </div>
      </header>
      <div className="routine__exercises">
        {exercises.map((__, i) => (
          <Exercise key={i} name={exercises[i]} />
        ))}
        <button className="routine__add">Add Exercise</button>
      </div>
      {showClock && <Clock setShowClock={setShowClock} />}
      {false && <Calculator />}
      {false && <Labels />}
    </main>
  );
}

export default Routine;
