import React from "react";
import { FaClock, FaWeightHanging } from "react-icons/fa";
import "../pages/Gym";

function WorkoutLog() {
  return (
    <div className="log">
      <div className="log__date">
        <p className="log__month">May</p>
        <h3 className="log__day">12</h3>
      </div>
      <div className="log__box">
        <h2 className="log__title">Workout Name</h2>
        <div className="log__info">
          <p className="log__stats">
            <FaClock className="log__icon" /> 123m
          </p>
          <p className="log__stats">
            <FaWeightHanging className="log__icon" /> 136382 lb
          </p>
        </div>
        <div className="log__exercises">
          <p className="log__exercise">3 x Chinups</p>
          <p className="log__exercise">
            20 x Incline Dumbbell Upper Chest Press
          </p>
          <p className="log__exercise">4 x Lateral Raises</p>
          <p className="log__exercise">10 x Pushups</p>
          <p className="log__exercise">2 x Bicep Curls</p>
        </div>
      </div>
    </div>
  );
}

export default WorkoutLog;
