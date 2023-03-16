import React, { useRef, useState } from "react";
import Calculator from "../components/Calculator";
import Clock from "../components/Clock";
import Exercise from "../components/Exercise";
import { Link } from "react-router-dom";
import { BsChevronDown, BsAlarm } from "react-icons/bs";
import "./Routine.css";

function Routine() {
  const [workoutName, setWorkoutName] = useState<string>("Workout Name");
  const [showClock, setShowClock] = useState<boolean>(false);

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
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <button className="routine__add">Add Exercise</button>
      </div>
      {false && <Calculator />}
      {showClock && <Clock setShowClock={setShowClock} />}
    </main>
  );
}

export default Routine;
