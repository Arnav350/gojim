import React from "react";
import Log from "./Log";
import { Link } from "react-router-dom";
import { BsGraphUp, BsPlus } from "react-icons/bs";
import "./Logs.css";

function Logs() {
  return (
    <div className="logs">
      <div className="logs__top">
        <BsGraphUp className="logs__graph" /> <BsPlus className="logs__plus" />
      </div>
      <h1 className="logs__heading">Log</h1>
      <div className="logs__new">
        <BsPlus className="logs__icon" />
      </div>
      <Log />
    </div>
  );
}

export default Logs;
