import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsPlusLg, BsThreeDots } from "react-icons/bs";
import "./Routine.css";

interface IRoutine {
  name: String;
  exercises: string[];
}

type IRoutines = IRoutine[];

function Routine() {
  const [routines, setRoutines] = useState<IRoutines>([
    {
      name: "Push",
      exercises: [
        "Bench Press",
        "Dips",
        "Incline Dumbbell Banded Bench Chest Press",
      ],
    },
    {
      name: "Pull",
      exercises: ["T-Bar Row", "Curls", "Lat Pulldown"],
    },
    {
      name: "Legs",
      exercises: ["Squat", "Leg Curls", "Calf Raises"],
    },
  ]);

  return (
    <main className="routine">
      <header className="routine__top">
        <Link to="/gym">
          <BsArrowLeft className="routine__nav" />
        </Link>
        <h2 className="routine__heading">Routines</h2>
        <BsPlusLg className="routine__nav" />
      </header>
      <div className="routine__scroll">
        <h3 className="routine__subheading">My Routines</h3>
        <div className="routine__mys">
          {routines.map((routine: IRoutine, i: number) => (
            <div key={i} className="routine__my">
              <div className="routine__row">
                <h4 className="routine__name">{routine.name}</h4>
                <BsThreeDots className="routine__dots" />
              </div>
              <p className="routine__exercises">
                {routine.exercises.join(", ")}
              </p>
              <button className="routine__start">Start Routine</button>
            </div>
          ))}
        </div>
        <h3 className="routine__subheading">Explore Routines</h3>
        <h4 className="routine__subtitle">Push Pull Legs</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Push</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Pull</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Legs</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
        <h4 className="routine__subtitle">Arnold Split</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Chest & Back</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Shoulders & Arms</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Legs</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
        <h4 className="routine__subtitle">Full Body Split</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Full Body 1</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Full Body 2</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Full Body 3</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
        <h4 className="routine__subtitle">Upper Lower</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Upper 1</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Lower 1</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Upper 2</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Lower 2</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
        <h4 className="routine__subtitle">Only Dumbbells</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Dumbbell Upper</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Dumbbell Lower</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
        <h4 className="routine__subtitle">No Equipment</h4>
        <div className="routine__explores">
          <div className="routine__explore">
            <h5 className="routine__name">Home 1</h5>
            <BsPlusLg className="routine__plus" />
          </div>
          <div className="routine__explore">
            <h5 className="routine__name">Home 2</h5>
            <BsPlusLg className="routine__plus" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Routine;
