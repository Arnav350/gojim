import React, { CSSProperties, useEffect, useState } from "react";
import EditTimers from "./EditTimers";
import { BsSliders, BsXLg, BsPencilSquare, BsChevronUp } from "react-icons/bs";
import "./Workout.css";

interface IWorkout {
  start: boolean;
  show: boolean;
}

interface IProps {
  workout: IWorkout;
  styleShowClock: CSSProperties;
  setStyleShowClock: Function;
  showClock: boolean;
  setShowClock: Function;
}

function Clock(props: IProps) {
  const [time, setTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(1);
  const [timerStart, setTimerStart] = useState<boolean>(false);
  const [stopwatch, setStopwatch] = useState<number>(0);
  const [stopwatchStart, setStopwatchStart] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<boolean>(true);
  const [timers, setTimers] = useState<number[]>([60, 120]);
  const [showTimers, setShowTimers] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;

    if (timerStart && !(time === 0)) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (timerStart) {
        handleStopClick();
      }
    }

    return () => clearInterval(interval);
  }, [timerStart, time]);

  useEffect(() => {
    let interval: any;

    if (stopwatchStart) {
      interval = setInterval(() => {
        setStopwatch(stopwatch + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stopwatchStart, stopwatch]);

  function handleStopClick() {
    if (timerMode) {
      setTimerStart(false);
      setTime(currentTime);
    } else {
      setStopwatchStart(false);
      setStopwatch(0);
    }
  }

  function handleTimerClick(i: number) {
    setTime(timers[i]);
    setCurrentTime(timers[i]);
  }

  function handleXClick() {
    props.setShowClock(false);
    props.setStyleShowClock({ display: "none" });
  }

  return (
    <div
      className="clock"
      style={
        props.workout.show
          ? { ...props.styleShowClock }
          : { ...props.styleShowClock, position: "static", textAlign: "center" }
      }
    >
      {props.workout.show ? (
        <div className="clock__show">
          <div className="clock__top">
            <BsSliders className="clock__nav" />
            <h2 className="clock__heading">Clock</h2>
            <BsXLg className="clock__nav" onClick={handleXClick} />
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
            {timerMode ? (
              <h1 className="clock__time">
                {time < 600
                  ? "0" + Math.floor(time / 60)
                  : Math.floor(time / 60)}
                :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
              </h1>
            ) : (
              <h1 className="clock__time">
                {stopwatch < 600
                  ? "0" + Math.floor(stopwatch / 60)
                  : Math.floor(stopwatch / 60)}
                :{stopwatch % 60 < 10 ? "0" + (stopwatch % 60) : stopwatch % 60}
              </h1>
            )}

            {timerStart && (
              <div className="clock__change">
                <button
                  className="clock__operator"
                  onClick={
                    time < 15
                      ? () => handleStopClick()
                      : () => setTime(time - 15)
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
          {timerStart || stopwatchStart ? (
            <div className="clock__buttons">
              <button className="clock__secondary" onClick={handleStopClick}>
                Stop
              </button>
              <button
                className="clock__primary"
                onClick={
                  timerMode
                    ? () => setTimerStart(false)
                    : () => setStopwatchStart(false)
                }
              >
                Pause
              </button>
            </div>
          ) : (
            <div className="clock__buttons">
              <button
                className="clock__secondary"
                onClick={() => setTimerMode(!timerMode)}
              >
                {timerMode ? "Stopwatch" : "Timer"}
              </button>
              <button
                className="clock__primary"
                onClick={
                  timerMode
                    ? () => setTimerStart(true)
                    : () => setStopwatchStart(true)
                }
              >
                Start
              </button>
            </div>
          )}

          {!timerStart && !stopwatchStart && (
            <div className="clock__timers">
              <div className="clock__timer" onClick={() => setShowTimers(true)}>
                <BsPencilSquare className="clock__icon" />
              </div>
              {timers.map((timer: number, i: number) => (
                <div
                  className="clock__timer"
                  key={i}
                  onClick={() => handleTimerClick(i)}
                >
                  <p className="clock__value">
                    {Math.floor(timer / 60)}:
                    {timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
                  </p>
                </div>
              ))}
            </div>
          )}
          {showTimers && (
            <EditTimers
              timers={timers}
              setTimers={setTimers}
              setShowTimers={setShowTimers}
            />
          )}
        </div>
      ) : (
        <p className="clock__workout">
          <BsChevronUp />
          {timerStart
            ? (time < 600
                ? "0" + Math.floor(time / 60)
                : Math.floor(time / 60)) +
              ":" +
              (time % 60 < 10 ? "0" + (time % 60) : time % 60)
            : stopwatchStart
            ? (stopwatch < 600
                ? "0" + Math.floor(stopwatch / 60)
                : Math.floor(stopwatch / 60)) +
              ":" +
              (stopwatch % 60 < 10 ? "0" + (stopwatch % 60) : stopwatch % 60)
            : "Resume Workout"}
        </p>
      )}
    </div>
  );
}

export default Clock;
