import React, { useRef, useState } from "react";
import Calculator from "../components/Calculator";
import Clock from "../components/Clock";
import Exercise from "../components/Exercise";
import { Link } from "react-router-dom";
import {
  BsChevronDown,
  BsPencilSquare,
  BsAlarm,
  BsCheckLg,
} from "react-icons/bs";
import "./Routine.css";

function Routine() {
  const headingRef = useRef<HTMLInputElement>(null!);

  const [headingEditable, setHeadingEditable] = useState<boolean>(false);
  const [workoutName, setWorkoutName] = useState<string>("Workout Name");
  const [showClock, setShowClock] = useState<boolean>(false);

  function toggleHeadingEdit() {
    if (headingEditable) {
      setHeadingEditable(false);
      headingRef.current.readOnly = true;
    } else {
      setHeadingEditable(true);
      headingRef.current.readOnly = false;
      headingRef.current.select();
    }
  }

  return (
    <main className="routine">
      <header className="routine__top">
        <div className="routine__navs">
          <BsChevronDown className="routine__nav" />
          <BsAlarm
            className="routine__nav"
            onClick={() => setShowClock(true)}
          />
        </div>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          readOnly={true}
          className="routine__heading"
          ref={headingRef}
          onChange={(event) => setWorkoutName(event.target.value)}
        />
        <div className="routine__navs">
          <button className="routine__edit" onClick={toggleHeadingEdit}>
            {headingEditable ? (
              <BsCheckLg className="routine__nav" />
            ) : (
              <BsPencilSquare className="routine__nav" />
            )}
          </button>
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
      <Calculator />
      {showClock && <Clock setShowClock={setShowClock} />}
    </main>
  );
}

export default Routine;
