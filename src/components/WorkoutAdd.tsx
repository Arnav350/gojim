import React, { useState } from "react";
import WorkoutNew from "./WorkoutNew";
import { BsXLg, BsSearch, BsPlusLg } from "react-icons/bs";
import "./Workout.css";

interface IExercise {
  name: string;
  muscle: string;
}

type IExercises = IExercise[];

interface IProps {
  setShowAdd: Function;
}

function WorkoutAdd(props: IProps) {
  const [exercises, setExercises] = useState<IExercises>([
    { name: "Bench Press", muscle: "Chest" },
    { name: "Standing Backwards Bicep Hammer Curls", muscle: "Biceps" },
    { name: "Squat", muscle: "Quads" },
    { name: "Rope Tricep Extension", muscle: "Triceps" },
    { name: "Ab Crunch", muscle: "Abs" },
  ]);

  const [search, setSearch] = useState<string>("");
  const [showNew, setShowNew] = useState<boolean>(false);

  return (
    <div className="add">
      <header className="add__top">
        <div className="add__header">
          <BsXLg className="add__nav" onClick={() => props.setShowAdd(false)} />
          <h2 className="add__heading">Add Exercise</h2>
          <BsPlusLg className="add__nav" onClick={() => setShowNew(true)} />
        </div>
        <div className="add__search">
          <BsSearch className="add__magnify" />
          <input
            type="text"
            value={search}
            placeholder="Search Exercise"
            className="add__input"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </header>
      <div className="add__exercises">
        {exercises
          .filter((exercise) => {
            if (search === "") {
              return exercise;
            } else if (
              exercise.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return exercise;
            }
          })
          .map((exercise: IExercise, i: number) => (
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
      {showNew && <WorkoutNew setShowNew={setShowNew} />}
    </div>
  );
}

export default WorkoutAdd;
