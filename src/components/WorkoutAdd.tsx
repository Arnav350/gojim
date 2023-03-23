import React, { useState } from "react";
import { BsXLg, BsSearch, BsPlusLg } from "react-icons/bs";
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
          <BsXLg className="add__nav" />
          <h2 className="add__heading">Add Exercise</h2>
          <BsPlusLg className="add__nav" />
        </div>
        <div className="add__search">
          <BsSearch className="add__magnify" />
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
            <div className="add__box">
              <img
                src="https://picsum.photos/500"
                alt=""
                className="add__image"
              />
              <div className="add__text">
                <h3 className="add__name">{exercise.name}</h3>
                <p className="add__muscle">{exercise.muscle}</p>
              </div>
            </div>
            <BsPlusLg className="add__plus" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutAdd;
