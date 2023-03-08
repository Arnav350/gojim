import React from "react";
import Set from "./Set";
import "../pages/Routine.css";

function Exercise() {
  return (
    <div className="exercise">
      <div className="exercise__top">
        <h3 className="exercise__name">Bicep Curl</h3>
        <p className="exercise__more">II</p>
      </div>
      <div className="exercise__row">
        <div className="exercise__">
          <h4 className="exercise__subtitle">Set</h4>
          <h4 className="exercise__subtitle">Weight</h4>
          <h4 className="exercise__subtite">Reps</h4>
        </div>
        <h4 className="exercise__notes">Notes</h4>
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
