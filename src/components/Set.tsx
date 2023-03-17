import React, { useState } from "react";
import "../pages/Routine.css";

interface IProps {
  id: number;
  prevWeight: number;
  prevReps: number;
  sets: { weight: number; reps: number }[];
  setSets: Function;
}

function Set(props: IProps) {
  const [weight, setWeight] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);

  function handleBlur() {}

  return (
    <div className="set">
      <div className="set__box">
        <h5 className="set__set">{props.id}</h5>
        <input
          type="number"
          placeholder={props.prevWeight.toString()}
          value={weight || ""}
          className="set__weight"
          onChange={(event) => setWeight(Number(event.target.value))}
          onBlur={handleBlur}
        />
        <input
          type="number"
          placeholder={props.prevReps.toString()}
          value={reps || ""}
          className="set__reps"
          onChange={(event) => setReps(Number(event.target.value))}
          onBlur={handleBlur}
        />
      </div>
      <input type="text" placeholder="" className="set__notes" />
    </div>
  );
}

export default Set;
