import React from "react";
import "../pages/Routine.css";

function Set() {
  return (
    <div className="set">
      <div className="set__box">
        <h5 className="set__set">1</h5>
        <input type="number" placeholder="400" className="set__weight" />
        <input type="number" placeholder="20" className="set__reps" />
      </div>
      <input type="text" placeholder="" className="set__notes" />
    </div>
  );
}

export default Set;
