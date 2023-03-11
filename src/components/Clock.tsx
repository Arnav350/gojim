import React, { useState } from "react";
import Timer from "./Timer";
import { BsSliders, BsXLg, BsPencilSquare } from "react-icons/bs";
import "../pages/Routine.css";

interface IProps {
  setShowClock: Function;
}

function Clock(props: IProps) {
  const [clockStart, setClockStart] = useState<boolean>(false);

  return (
    <div className="clock">
      <div className="clock__top">
        <BsSliders className="clock__nav" />
        <h2 className="clock__heading">Clock</h2>
        <BsXLg
          className="clock__nav"
          onClick={() => props.setShowClock(false)}
        />
      </div>
      <div className="clock__circle">
        <h1 className="clock__time">4:32</h1>
        {clockStart && (
          <div className="clock__change">
            <button className="clock__operator">-15s</button>
            <button className="clock__operator">+15s</button>
          </div>
        )}
      </div>
      {clockStart ? (
        <div className="clock__buttons">
          <button
            className="clock__secondary"
            onClick={() => setClockStart(false)}
          >
            Stop
          </button>
          <button className="clock__primary">Pause</button>
        </div>
      ) : (
        <div className="clock__buttons">
          {true ? (
            <button className="clock__secondary">Stopwatch</button>
          ) : (
            <button className="clock__secondary">Timer</button>
          )}
          <button
            className="clock__primary"
            onClick={() => setClockStart(true)}
          >
            Start
          </button>
        </div>
      )}

      {!clockStart && (
        <div className="clock__timers">
          <div className="clock__edit">
            <BsPencilSquare className="clock__pencil" />
          </div>
          <Timer />
          <Timer />
          <Timer />
          <Timer />
          <Timer />
          <Timer />
          <Timer />
          <Timer />
        </div>
      )}
    </div>
  );
}

export default Clock;
