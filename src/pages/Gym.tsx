import React, { Dispatch, SetStateAction } from "react";
import GymLog from "../components/GymLog";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsPlusLg,
  BsClipboard2Plus,
  BsBookmark,
} from "react-icons/bs";
import "./Gym.css";

interface IWorkout {
  start: boolean;
  show: boolean;
}

interface IProps {
  setWorkout: Dispatch<SetStateAction<IWorkout>>;
}

function Gym(props: IProps) {
  return (
    <main className="gym">
      <header className="gym__top">
        <BsGraphUp className="gym__nav" />
        <h2 className="gym__heading">Workout</h2>
        <BsPlusLg className="gym__nav" />
      </header>
      <div className="gym__scroll">
        <div className="gym__box">
          <div className="gym__empty">
            <BsPlusLg className="gym__plus" />
            <h4
              className="gym__subtitle"
              onClick={() => props.setWorkout({ start: true, show: true })}
            >
              Start Empty Workout
            </h4>
          </div>
          <div className="gym__routines">
            <button className="gym__routine">
              <BsClipboard2Plus className="gym__icon" />
              <h4 className="gym__subtitle">New Routine</h4>
            </button>
            <Link to="/routine" className="gym__routine">
              <BsBookmark className="gym__icon" />
              <h4 className="gym__subtitle">Select Routine</h4>
            </Link>
          </div>
        </div>
        <div className="gym__logs">
          <GymLog />
          <GymLog />
          <GymLog />
          <GymLog />
        </div>
      </div>
    </main>
  );
}

export default Gym;
