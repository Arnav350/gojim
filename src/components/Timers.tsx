import React, { useState } from "react";
import { BsChevronDown, BsPlus, BsDash } from "react-icons/bs";
import "../pages/Routine.css";

interface IProps {
  timers: number[];
  setTimers: Function;
  setShowTimers: Function;
}

function Timers(props: IProps) {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  function handlePlusClick() {
    const timersArr = [...props.timers];
    timersArr.unshift(minutes * 60 + seconds);
    props.setTimers(timersArr);
    setMinutes(0);
    setSeconds(0);
  }

  function handleDashClick(i: number) {
    const timersArr = [...props.timers];
    timersArr.splice(i, 1);
    props.setTimers(timersArr);
  }

  return (
    <div className="timers">
      <header className="timers__top">
        <BsChevronDown
          className="timers__nav"
          onClick={() => props.setShowTimers(false)}
        />
        <h2 className="timers__heading">Edit Timers</h2>
      </header>
      <div className="timers__box">
        <BsPlus
          className="timers__plus timers__icon"
          onClick={handlePlusClick}
        />
        <input
          type="number"
          value={minutes || ""}
          className="timers__half"
          onChange={(event) => setMinutes(Number(event.target.value))}
        />
        <p className="timers__colon">:</p>
        <input
          type="number"
          value={seconds || ""}
          className="timers__half"
          onChange={(event) => setSeconds(Number(event.target.value))}
        />
      </div>
      {props.timers.map((timer, i) => (
        <div key={i} className="timers__box">
          <BsDash
            className="timers__dash timers__icon"
            onClick={() => handleDashClick(i)}
          />
          <p className="timers__time">
            {Math.floor(timer / 60) < 10
              ? "0" + Math.floor(timer / 60)
              : Math.floor(timer / 60)}
            :{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Timers;
