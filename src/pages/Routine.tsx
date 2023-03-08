import React from "react";
import {
  BsChevronDown,
  BsPencilSquare,
  BsAlarm,
  BsCheckLg,
} from "react-icons/bs";
import "./Routine.css";

function Routine() {
  return (
    <div className="routine">
      <div className="routine__top">
        <div>
          <BsChevronDown className="routine__nav" />
          <BsAlarm className="routine__nav" />
        </div>
        <input className="routine__heading" />
        <div>
          <BsPencilSquare className="routine__nav" />
          <BsCheckLg className="routine__nav" />
        </div>
      </div>
    </div>
  );
}

export default Routine;
