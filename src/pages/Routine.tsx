import React, { useRef, useState } from "react";
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
  const heading = useRef<HTMLInputElement>(null!);

  const [edit, setEdit] = useState<boolean>(false);
  const [inp, setInp] = useState<string>("Workout Name");

  function toggleHeadingEdit() {
    if (edit) {
      setEdit(false);
      heading.current.readOnly = true;
    } else {
      setEdit(true);
      heading.current.readOnly = false;
      heading.current.select();
    }
  }

  return (
    <div className="routine">
      <div className="routine__top">
        <div className="routine__navs">
          <BsChevronDown className="routine__nav" />
          <BsAlarm className="routine__nav" />
        </div>
        <input
          type="text"
          placeholder="Workout Name"
          value={inp}
          readOnly={true}
          className="routine__heading"
          ref={heading}
          onChange={(event) => setInp(event.target.value)}
        />
        <div className="routine__navs">
          <button className="routine__edit" onClick={toggleHeadingEdit}>
            {edit ? (
              <BsCheckLg className="routine__nav" />
            ) : (
              <BsPencilSquare className="routine__nav" />
            )}
          </button>
          <Link to="/workout" className="routine__finish">
            Finish
          </Link>
        </div>
      </div>
      <div className="routine__exercises">
        <Exercise />
        <Exercise />
        <Exercise />
      </div>
      <button className="routine__add"></button>
    </div>
  );
}

export default Routine;
