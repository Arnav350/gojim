import React from "react";
import Log from "../components/Log";
import { Link } from "react-router-dom";
import { BsGraphUp, BsPlusLg } from "react-icons/bs";
import "./Logs.css";

function Logs() {
  return (
    <div className="logs">
      <div className="logs__top">
        <BsGraphUp className="logs__nav" />
        <h2 className="logs__heading">Log</h2>
        <BsPlusLg className="logs__nav" />
      </div>
      <div className="logs__list">
        <div className="logs__new">
          <BsPlusLg className="logs__plus" />
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
