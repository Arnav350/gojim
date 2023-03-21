import React, { useState } from "react";
import PlateCalculator from "./PlateCalculator";
import SetLabels from "./SetLabels";
import Clock from "./Clock";
import RoutineExercise from "./RoutineExercise";
import { Link } from "react-router-dom";
import { BsChevronDown, BsAlarm, BsChevronUp } from "react-icons/bs";
import "../pages/Gym.css";

interface IProps {
  workout: any;
  setWorkout: Function;
}

function Workout(props: IProps) {
  const [showClock, setShowClock] = useState<boolean>(false);

  const [date, setDate] = useState();
  const [workoutName, setWorkoutName] = useState<string>("Workout Name");
  const [duration, setDuration] = useState();
  const [totalWeight, setTotalWeight] = useState<number>();
  const [exercises, setExercises] = useState<string[]>([
    "Bench Press",
    "Smith Machine Elevated Front Squat",
    "Bicep Curl",
  ]);
  const [setsAmount, setSetsAmount] = useState<number[]>([3, 3, 3]);

  return (
    <main
      className="workout"
      style={
        props.workout.show ? undefined : { bottom: "64px", height: "64px" }
      }
    >
      {props.workout.show ? (
        <div className="workout__show">
          <header className="workout__top">
            <div className="workout__navs">
              <BsChevronDown
                className="workout__nav"
                onClick={() =>
                  props.setWorkout({ ...props.workout, show: false })
                }
              />
              <BsAlarm
                className="workout__nav"
                onClick={() => setShowClock(true)}
              />
            </div>
            <input
              type="text"
              placeholder="Workout Name"
              value={workoutName}
              className="workout__heading"
              onChange={(event) => setWorkoutName(event.target.value)}
            />
            <div className="workout__navs">
              <Link to="/workout" className="workout__finish">
                Finish
              </Link>
            </div>
          </header>
          <div className="workout__exercises">
            {exercises.map((__, i) => (
              <RoutineExercise key={i} name={exercises[i]} />
            ))}
            <button className="workout__add">Add Exercise</button>
          </div>
          {showClock && <Clock setShowClock={setShowClock} />}
          {false && <PlateCalculator />}
          {false && <SetLabels />}
        </div>
      ) : (
        <div
          className="workout__bar"
          onClick={() => props.setWorkout({ ...props.workout, show: true })}
        >
          <h3 className="workout__name">{workoutName}</h3>
          <p className="workout__resume">
            <BsChevronUp className="workout__up" /> Resume Workout
          </p>
        </div>
      )}
    </main>
  );
}

export default Workout;
