import React from "react";
import { BsXLg } from "react-icons/bs";

function Calculator() {
  return (
    <div className="calculator">
      <header className="calculator__top">
        <h4 className="calculator__unit">Lbs</h4>
        <h3 className="calculator__heading">Plate Calculator</h3>
        <BsXLg className="calculator__icon" />
      </header>
      <div className="calculator__container">
        <h2 className="calculator__total">400</h2>
        <div className="calculator__subtitles">
          <h5 className="calculator__subtitle">Bar</h5>
          <h5 className="calculator__subtitle">Plates (each side)</h5>
        </div>
        <div className="calculator__weights">
          <div className="calculator__bar">
            <input
              type="range"
              min="0"
              max="11"
              className="calculator__slider"
            />
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__1 calculator__plate">55</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__2 calculator__plate">45</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__3 calculator__plate">35</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__4 calculator__plate">25</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__5 calculator__plate">10</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__6 calculator__plate">5</h5>
            <h5 className="calculator__number">2</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__7 calculator__plate">12.5</h5>
            <h5 className="calculator__number">2</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
