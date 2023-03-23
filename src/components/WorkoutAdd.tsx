import React, { useState } from "react";
import { BsSearch, BsPlus } from "react-icons/bs";
import "./Workout.css";

interface IExercise {
  name: string;
  muscle: string;
}

type IExercises = IExercise[];

function WorkoutAdd() {
  const [exercises, setExercises] = useState<IExercises>([
    { name: "Bench Press", muscle: "Chest" },
    { name: "Standing Backwards Bicep Hammer Curls", muscle: "Biceps" },
  ]);

  return (
    <div className="add">
      <header className="add__top">
        <div className="add__header">
          <p className="add__nav">II</p>
          <h2 className="add__heading">Add Exercise</h2>
          <p className="add__nav">II</p>
        </div>
        <div className="add__search">
          <BsSearch />
          <input
            type="text"
            placeholder="Search Exercise"
            className="add__input"
          />
        </div>
      </header>
      <div className="add__exercises">
        {exercises.map((exercise: IExercise, i: number) => (
          <div className="add__exercise" key={i}>
            <img
              src="https://picsum.photos/500"
              alt=""
              className="add__image"
            />
            <div className="add__box">
              <h3 className="add__name">{exercise.name}</h3>
              <p className="add__muscle">{exercise.muscle}</p>
            </div>
            <BsPlus className="add__plus" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutAdd;
