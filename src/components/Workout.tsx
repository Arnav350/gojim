import React, { useState, Dispatch, SetStateAction } from "react";
import PlateCalculator from "./PlateCalculator";
import SetLabels from "./SetLabels";
import Clock from "./Clock";
import WorkoutExercise from "./WorkoutExercise";
import WorkoutAdd from "./WorkoutAdd";
import { Link } from "react-router-dom";
import { BsChevronDown, BsAlarm } from "react-icons/bs";
import "./Workout.css";

interface IWorkout {
  start: boolean;
  show: boolean;
}

interface IProps {
  workout: IWorkout;
  setWorkout: Dispatch<SetStateAction<IWorkout>>;
}

function Workout(props: IProps) {
  const [showAdd, setShowAdd] = useState<boolean>(false);

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

  const [showClock, setShowClock] = useState<boolean>(false);

  function handleClockClick() {
    setShowClock(true);
  }

  function handleDownClick() {
    props.setWorkout({ ...props.workout, show: false });
    setShowClock(true);
  }

  function handleUpClick() {
    props.setWorkout({ ...props.workout, show: true });
    setShowClock(false);
  }

  return (
    <div
      className="workout"
      style={props.workout.show ? {} : { bottom: "64px", height: "64px" }}
    >
      {props.workout.show ? (
        <div className="workout__show">
          <header className="workout__top">
            <div className="workout__navs">
              <BsChevronDown
                className="workout__nav"
                onClick={handleDownClick}
              />
              <BsAlarm className="workout__nav" onClick={handleClockClick} />
            </div>
            <input
              type="text"
              placeholder="Workout Name"
              value={workoutName}
              className="workout__heading"
              onChange={(event) => setWorkoutName(event.target.value)}
            />
            <div className="workout__navs">
              <Link to="/gym" className="workout__finish">
                Finish
              </Link>
            </div>
          </header>
          <div className="workout__exercises">
            {exercises.map((__, i) => (
              <WorkoutExercise key={i} name={exercises[i]} />
            ))}
            <button className="workout__add" onClick={() => setShowAdd(true)}>
              Add Exercise
            </button>
          </div>
          {false && <PlateCalculator />}
          {false && <SetLabels />}
          {showAdd && <WorkoutAdd setShowAdd={setShowAdd} />}
        </div>
      ) : (
        <div className="workout__bar" onClick={handleUpClick}>
          <h3 className="workout__name">{workoutName}</h3>
        </div>
      )}
      <Clock
        workout={props.workout}
        showClock={showClock}
        setShowClock={setShowClock}
      />
    </div>
  );
}

export default Workout;
