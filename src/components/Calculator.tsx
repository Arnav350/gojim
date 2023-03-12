import React from "react";

function Calculator() {
  return (
    <div className="claculator">
      <div className="calculator__top">
        <p className="calculator__icon">II</p>
        <h3 className="calculator__heading">Plate Calculator</h3>
        <h4 className="calculator__metric">Lbs</h4>
      </div>
      <div className="calculator__box">
        <div className="calculator__subtitles">
          <h5 className="calculator__subtitle">Bar</h5>
          <h5 className="calculator__subtitle">Plates</h5>
        </div>
        <div className="calculator__weights">
          <div className="calculator__bar"></div>
          <div className="calculator__1"></div>
          <div className="calculator__2"></div>
          <div className="calculator__3"></div>
          <div className="calculator__4"></div>
          <div className="calculator__5"></div>
          <div className="calculator__6"></div>
          <div className="calculator__7"></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
