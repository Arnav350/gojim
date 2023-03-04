import React from "react";

function Log() {
  return (
    <div className="log">
      <div className="log__date">
        <h4 className="log__month">May</h4>
        <h3 className="log__day">12</h3>
      </div>
      <div className="log__box">
        <h2 className="log__title">Woukout Name</h2>
        <div className="log__info">
          <h4 className="log__time">Time</h4>
          <h4 className="log__weight">Weight</h4>
        </div>
        <div className="log__exercises">
          <div className="log__exercise">
            <p className="log__set">1x</p>
            <p className="log__name">Exercise 1</p>
          </div>
          <div className="log__exercise">
            <p className="log__set">5x</p>
            <p className="log__name">Exercise 2</p>
          </div>
          <div className="log__exercise">
            <p className="log__set">7x</p>
            <p className="log__name">Exercise 3</p>
          </div>
          <div className="log__exercise">
            <p className="log__set">20x</p>
            <p className="log__name">Exercise 4</p>
          </div>
          <div className="log__exercise">
            <p className="log__set">2x</p>
            <p className="log__name">Exercise 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
