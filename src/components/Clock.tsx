import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import { BsSliders, BsXLg, BsPencilSquare } from "react-icons/bs";
import "../pages/Routine.css";

interface IProps {
  setShowClock: Function;
}

function Clock(props: IProps) {
  const [clockStart, setClockStart] = useState<boolean>(false);

  const [time, setTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(1);
  const [timers, setTimers] = useState<number[]>([10, 230]);

  useEffect(() => {
    let interval: any;

    if (clockStart && !(time === 0)) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (clockStart) {
        handleStopClick();
      }
    }

    return () => clearInterval(interval);
  });

  function handleStopClick() {
    setClockStart(false);
    setTime(currentTime);
  }

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
      <div
        className="clock__circle"
        style={{
          background: `conic-gradient(#487 ${
            (time / currentTime) * 100
          }%, #0000 0), #444`,
        }}
      >
        <div className="clock__mask"></div>
        <h1 className="clock__time">
          {time < 600 ? "0" + Math.floor(time / 60) : Math.floor(time / 60)}:
          {time % 60 < 10 ? "0" + (time % 60) : time % 60}
        </h1>
        {clockStart && (
          <div className="clock__change">
            <button
              className="clock__operator"
              onClick={
                time < 15 ? () => handleStopClick() : () => setTime(time - 15)
              }
            >
              -15s
            </button>
            <button
              className="clock__operator"
              onClick={() => setTime(time + 15)}
            >
              +15s
            </button>
          </div>
        )}
      </div>
      {clockStart ? (
        <div className="clock__buttons">
          <button className="clock__secondary" onClick={handleStopClick}>
            Stop
          </button>
          <button
            className="clock__primary"
            onClick={() => setClockStart(false)}
          >
            Pause
          </button>
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
          {timers.map((timer, i) => (
            <Timer
              key={i}
              timer={timer}
              setTime={setTime}
              setCurrentTime={setCurrentTime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Clock;
