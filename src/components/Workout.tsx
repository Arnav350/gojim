import React, { useState } from "react";
import PlateCalculator from "./PlateCalculator";
import SetLabels from "./SetLabels";
import Clock from "./Clock";
import RoutineExercise from "./RoutineExercise";
import { Link } from "react-router-dom";
import { BsChevronDown, BsAlarm } from "react-icons/bs";
import "../pages/Gym.css";

function Workout() {
  const [showClock, setShowClock] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

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

  function handleClick() {}

  return (
    <main className="workout">
      <header className="workout__top">
        <div className="workout__navs">
          <BsChevronDown className="workout__nav" onClick={handleClick} />
          <BsAlarm
            className="workout__nav"
            onClick={() => setShowClock(true)}
          />
        </div>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          className="workout__heading"
          onChange={(event) => setWorkoutName(event.target.value)}
        />
        <div className="workout__navs">
          <Link to="/workout" className="workout__finish">
            Finish
          </Link>
        </div>
      </header>
      <div className="workout__exercises">
        {exercises.map((__, i) => (
          <RoutineExercise key={i} name={exercises[i]} />
        ))}
        <button className="workout__add">Add Exercise</button>
      </div>
      {showClock && <Clock setShowClock={setShowClock} />}
      {false && <PlateCalculator />}
      {false && <SetLabels />}
    </main>
  );
}

export default Workout;
