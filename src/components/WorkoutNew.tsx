import React, { useState } from "react";
import { BsXLg, BsCheckLg, BsChevronDown } from "react-icons/bs";
import "./Workout.css";

interface IProps {
  setShowNew: Function;
}

function WorkoutNew(props: IProps) {
  const [exerciseName, setExerciseName] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const muscles: string[] = [
    "Chest",
    "Back",
    "Biceps",
    "Triceps",
    "Lats",
    "Shoulders",
    "Quads",
    "Hamstrings",
    "Core",
    "Calves",
    "Forearms",
    "Cardio",
    "Other",
  ];

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
      <div className="new__dropdown">
        <label htmlFor="new__select" className="new__label">
          Muscle Group:
        </label>
        <BsChevronDown className="new__down" />
        <select id="new__select" className="new__select">
          {muscles.map((muscle: string, i: number) => (
            <option key={i} value={muscle} className="new__option">
              {muscle}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default WorkoutNew;
