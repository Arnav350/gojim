import React from "react";

function Clock() {
  return (
    <div className="clock">
      <div className="clock__top">
        <p className="clock__nav"></p>
        <h2 className="clock__heading"></h2>
        <p className="clock__nav"></p>
      </div>
      <div className="clock__circle">
        <h1 className="clock__time"></h1>
      </div>
      <div className="clock__buttons">
        <button className="clock__button"></button>
        <button className="clock__button"></button>
      </div>
      {true ? (
        <div className="clock__timers">
          <div className="clock__edit"></div>
          {/* Other Timer */}
        </div>
      ) : (
        <div className="clock__change">
          <button className="clock__add"></button>
          <button className="clock__subtact"></button>
        </div>
      )}
    </div>
  );
}

export default Clock;
