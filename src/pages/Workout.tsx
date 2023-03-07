import React from "react";
import Log from "../components/Log";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsPlusLg,
  BsClipboard2Plus,
  BsBookmark,
} from "react-icons/bs";
import "./Workout.css";

function Workout() {
  return (
    <div className="workout">
      <div className="workout__top">
        <BsGraphUp className="workout__nav" />
        <h2 className="workout__heading">Workout</h2>
        <BsPlusLg className="workout__nav" />
      </div>
      <div className="workout__box">
        <button className="workout__empty">
          <BsPlusLg className="workout__plus" />
          <h4 className="workout__subtitle">Start Empty Workout</h4>
        </button>
        <div className="workout__routines">
          <button className="workout__routine">
            <BsClipboard2Plus className="workout__icon" />
            <h4 className="workout__subtitle">New Routine</h4>
          </button>
          <button className="workout__routine">
            <BsBookmark className="workout__icon" />
            <h4 className="workout__subtitle">Select Routine</h4>
          </button>
        </div>
      </div>
      <div className="workout__logs">
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </div>
  );
}

export default Workout;
