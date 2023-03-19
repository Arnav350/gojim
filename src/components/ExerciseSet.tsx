import React, { useState } from "react";
import "../pages/Gym.css";

interface IProps {
  id: number;
  prevSet: {
    label?: "W" | "D";
    weight: number;
    reps: number;
    note?: string;
  };
  sets: { label?: "W" | "D"; weight: number; reps: number; note?: string }[];
  setSets: Function;
}

function ExerciseSet(props: IProps) {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [note, setNote] = useState<string>("");

  function handleWeightBlur() {
    const tempSets = [...props.sets];
    tempSets[props.id].weight =
      weight !== "" ? Number(weight) : props.prevSet.weight;
    props.setSets([...tempSets]);
  }

  function handleRepsBlur() {
    const tempSets = [...props.sets];
    tempSets[props.id].reps = reps !== "" ? Number(reps) : props.prevSet.reps;
    props.setSets([...tempSets]);
  }

  function handleNoteBlur() {
    const tempSets = [...props.sets];
    tempSets[props.id].note = note !== "" ? note : props.prevSet.note;
    props.setSets([...tempSets]);
  }

  return (
    <div className="set">
      <div className="set__box">
        <h5 className="set__set">
          {props.sets[props.id].label
            ? props.sets[props.id].label
            : props.id + 1}
        </h5>
        <input
          type="number"
          placeholder={props.prevSet.weight.toString()}
          value={weight}
          className="set__weight"
          onChange={(event) => setWeight(event.target.value)}
          onBlur={handleWeightBlur}
        />
        <input
          type="number"
          placeholder={props.prevSet.reps.toString()}
          value={reps}
          className="set__reps"
          onChange={(event) => setReps(event.target.value)}
          onBlur={handleRepsBlur}
        />
      </div>
      <input
        type="text"
        placeholder={props.prevSet.note}
        value={note}
        className="set__note"
        onChange={(event) => setNote(event.target.value)}
        onBlur={handleNoteBlur}
      />
    </div>
  );
}

export default ExerciseSet;
