import React from "react";
import { BsPlus, BsCheckLg } from "react-icons/bs";

function History() {
  return (
    <div className="history">
      <div className="history__text">
        <h4 className="history__name">Extra Virgin Olive Oil</h4>
        <p className="history__info">460 cal - 4tbsp</p>
      </div>
      {true ? (
        <BsPlus className="history__icon" />
      ) : (
        <BsCheckLg className="history__icon" />
      )}
    </div>
  );
}

export default History;
