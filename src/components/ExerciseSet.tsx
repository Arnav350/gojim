import React, { useState, Dispatch, SetStateAction } from "react";
import "./Workout.css";

interface ISet {
  label?: "W" | "D";
  weight: number;
  reps: number;
  notes?: string;
}

type ISets = ISet[];

interface IProps {
  id: number;
  prevSet: ISet;
  sets: ISets;
  setSets: Dispatch<SetStateAction<ISets>>;
}

function ExerciseSet(props: IProps) {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

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

  function handleNotesBlur() {
    const tempSets = [...props.sets];
    tempSets[props.id].notes = notes !== "" ? notes : props.prevSet.notes;
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
        placeholder={props.prevSet.notes}
        value={notes}
        className="set__notes"
        onChange={(event) => setNotes(event.target.value)}
        onBlur={handleNotesBlur}
      />
    </div>
  );
}

export default ExerciseSet;
