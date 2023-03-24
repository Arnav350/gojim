import React from "react";
import { BsXLg, BsCheckLg } from "react-icons/bs";
import "./Workout.css";

function WorkoutNew() {
  return (
    <div className="new">
      <div className="new__top">
        <BsXLg className="new__nav" />
        <h2 className="new__heading">New Exercise</h2>
        <BsCheckLg className="new__nav" />
      </div>
      <input type="text" placeholder="Exercise Name" className="new__input" />
    </div>
  );
}

export default WorkoutNew;
