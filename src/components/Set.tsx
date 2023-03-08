import React from "react";
import "../pages/Routine.css";

function Set() {
  return (
    <div className="set">
      <h5 className="set__set">1</h5>
      <input placeholder="400" className="set__weight" />
      <input placeholder="20" className="set__reps" />
    </div>
  );
}

export default Set;
