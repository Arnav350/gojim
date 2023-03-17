import React, { useState } from "react";
import Set from "./Set";
import { BsThreeDots } from "react-icons/bs";
import "../pages/Routine.css";

function Exercise() {
  const [prevSets, setPrevSets] = useState([
    { prevWeight: 200, prevReps: 10 },
    { prevWeight: 300, prevReps: 8 },
    { prevWeight: 400, prevReps: 6 },
  ]);

  const [sets, setSets] = useState([{ weight: 200, reps: 10 }]);

  function handleClick() {
    let setsArr = [...prevSets];
    setsArr.push({ prevWeight: 0, prevReps: 0 });
    setPrevSets(setsArr);
  }

  return (
    <div className="exercise">
      <div className="exercise__top">
        <h3 className="exercise__name">Bicep Curl</h3>
        <BsThreeDots className="exercise__more" />
      </div>
      <div className="exercise__subtitles">
        <h4 className="exercise__subtitle">Set</h4>
        <h4 className="exercise__subtitle">Weight</h4>
        <h4 className="exercise__subtitle">Reps</h4>
        <h4 className="exercise__subtitle">Notes</h4>
      </div>
      <div className="exercise__sets">
        {prevSets.map((prevSet, i) => (
          <Set
            key={i}
            id={i + 1}
            prevWeight={prevSet.prevWeight}
            prevReps={prevSet.prevReps}
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

export default Exercise;
