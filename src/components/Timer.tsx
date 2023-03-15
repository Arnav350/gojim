import React from "react";
import "../pages/Routine.css";

interface IProps {
  timer: number;
  setTime: Function;
  setCurrentTime: Function;
}

function Timer(props: IProps) {
  function handleClick() {
    props.setTime(props.timer);
    props.setCurrentTime(props.timer);
  }

  return (
    <div className="timer" onClick={handleClick}>
      <p className="timer__time">
        {Math.floor(props.timer / 60)}:
        {props.timer % 60 < 10 ? "0" + (props.timer % 60) : props.timer % 60}
      </p>
    </div>
  );
}

export default Timer;
