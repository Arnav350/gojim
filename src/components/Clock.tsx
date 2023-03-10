import React, { useState } from "react";
import Timer from "./Timer";
import { BsSliders, BsXLg, BsPencilSquare } from "react-icons/bs";
import "../pages/Routine.css";

function Clock() {
  const [start, setStart] = useState(false);

  return (
    <div className="clock">
      <div className="clock__top">
        <BsSliders className="clock__nav" />
        <h2 className="clock__heading">Clock</h2>
        <BsXLg className="clock__nav" />
      </div>
      <div className="clock__circle">
        <h1 className="clock__time">4:32</h1>
        {start && (
          <div className="clock__change">
            <button className="clock__operator">-15s</button>
            <button className="clock__operator">+15s</button>
          </div>
        )}
      </div>
      {start ? (
        <div className="clock__buttons">
          <button className="clock__secondary" onClick={() => setStart(false)}>
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
          <button className="clock__primary" onClick={() => setStart(true)}>
            Start
          </button>
        </div>
      )}

      {!start && (
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
