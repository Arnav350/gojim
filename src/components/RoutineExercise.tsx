import React, { useState } from "react";
import ExerciseSet from "./ExerciseSet";
import { BsThreeDots } from "react-icons/bs";
import "../pages/Gym.css";

interface IProps {
  name: string;
}

interface IPrevSet {
  label?: "W" | "D";
  weight: number;
  reps: number;
  note?: string;
}

type IPrevSets = IPrevSet[];

interface ISet {
  label?: "W" | "D";
  weight: number;
  reps: number;
  notes?: string;
}

type ISets = ISet[];

function RoutineExercise(props: IProps) {
  const [prevSets, setPrevSets] = useState<IPrevSets>([
    { label: "W", weight: 200, reps: 10, note: "note" },
    { weight: 300, reps: 8 },
    { label: "D", weight: 400, reps: 6 },
  ]);

  const [sets, setSets] = useState<ISets>([
    { label: "W", weight: 200, reps: 10 },
    { weight: 300, reps: 8 },
    { label: "D", weight: 400, reps: 6 },
  ]);

  function handleClick() {
    const tempSets = [...sets];
    tempSets.push({ weight: 0, reps: 0 });
    setPrevSets([...tempSets]);
    setSets([...tempSets]);
  }

  return (
    <div className="exercise">
      <div className="exercise__top">
        <h3 className="exercise__name">{props.name}</h3>
        <BsThreeDots className="exercise__more" />
      </div>
      <div className="exercise__subtitles">
        <h4 className="exercise__subtitle">Set</h4>
        <h4 className="exercise__subtitle">Weight</h4>
        <h4 className="exercise__subtitle">Reps</h4>
        <h4 className="exercise__subtitle">Notes</h4>
      </div>
      <div className="exercise__sets">
        {sets.map((__, i) => (
          <ExerciseSet
            key={i}
            id={i}
            prevSet={prevSets[i]}
            sets={sets}
            setSets={setSets}
          />
        ))}
      </div>
      <button className="exercise__add" onClick={handleClick}>
        + Add Set
      </button>
    </div>
  );
}

export default RoutineExercise;
