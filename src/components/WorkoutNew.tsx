import React, { useState } from "react";
import { BsXLg, BsCheckLg, BsChevronDown } from "react-icons/bs";
import "./Workout.css";

interface IProps {
  setShowNew: Function;
}

function WorkoutNew(props: IProps) {
  const [exerciseName, setExerciseName] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function handleClick() {}

  return (
    <div className="new">
      <div className="new__top">
        <BsXLg className="new__nav" onClick={() => props.setShowNew(false)} />
        <h2 className="new__heading">New Exercise</h2>
        <BsCheckLg className="new__nav" onClick={handleClick} />
      </div>
      <input
        type="text"
        value={exerciseName}
        placeholder="Exercise Name..."
        className="new__input"
        onChange={(event) => setExerciseName(event.target.value)}
      />
      <label htmlFor="test" className="new__dropdown">
        Muscle Group <BsChevronDown className="new__down" />
      </label>
      <select name="test" id="test">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

export default WorkoutNew;
