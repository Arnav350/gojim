import React from "react";
import Log from "./Log";
import { Link } from "react-router-dom";
import { AiOutlineLineChart, AiOutlinePlus } from "react-icons/ai";
import "./Logs.css";

function Logs() {
  return (
    <div className="logs">
      <div className="logs__top">
        <div className="logs__icons">
          <AiOutlineLineChart className="logs__icon" />
          <AiOutlinePlus className="logs__icon" />
        </div>
        <h1 className="logs__heading">Log</h1>
      </div>
      <div className="logs__list">
        <div className="logs__new">
          <AiOutlinePlus className="logs__plus" />
        </div>
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </div>
  );
}

export default Logs;
