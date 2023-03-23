import React from "react";
import { BsChevronDown, BsTrash3 } from "react-icons/bs";
import "./Workout.css";

function SetLabels() {
  return (
    <div className="labels">
      <div className="labels__top">
        <BsChevronDown className="labels__nav" />
        <h2 className="labels__heading">Edit Set</h2>
      </div>
      <div className="labels__box">
        <h2 className="labels__warmup labels__letter">W</h2>
        <h4 className="labels__subtitle">Warm Up Set</h4>
      </div>
      <div className="labels__box">
        <h2 className="labels__normal labels__letter">1</h2>
        <h4 className="labels__subtitle">Normal Set</h4>
      </div>
      <div className="labels__box">
        <h2 className="labels__drop labels__letter">D</h2>
        <h4 className="labels__subtitle">Drop Set</h4>
      </div>
      <div className="labels__box">
        <BsTrash3 className="labels__delete labels__letter" />
        <h4 className="labels__subtitle">Delete Set</h4>
      </div>
    </div>
  );
}

export default SetLabels;
