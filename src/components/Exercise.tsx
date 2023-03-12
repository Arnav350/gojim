import React from "react";
import Set from "./Set";
import { BsThreeDots } from "react-icons/bs";
import "../pages/Routine.css";

function Exercise() {
  return (
    <div className="exercise">
      <div className="exercise__top">
        <h3 className="exercise__name">Bicep Curl</h3>
        <BsThreeDots className="exercise__more" />
      </div>
      <div className="exercise__subtitles">
        <h4 className="exercise__subtitle">Set</h4>
        <h4 className="exercise__subtitle">Weight</h4>
        <h4 className="exercise__subtitle">Reps</h4>
        <h4 className="exercise__subtitle">Notes</h4>
      </div>
      <div className="exercise__sets">
        <Set />
        <Set />
        <Set />
      </div>
      <button className="exercise__add">+ Add Set</button>
    </div>
  );
}

export default Exercise;
