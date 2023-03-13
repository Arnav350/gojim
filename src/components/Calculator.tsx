import React, { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";

function Calculator() {
  const [barWeight, setBarWeight] = useState<number>(9);

  const plateWeights: number[] = [55, 45, 35, 25, 10, 5, 2.5];

  function handleBlur(totalWeight: number) {
    totalWeight -= barWeight * 5;

    if (totalWeight < 0) {
      return;
    }

    const numberElems = document.querySelectorAll<HTMLDivElement>(
      ".calculator__number"
    );
    const plateElems =
      document.querySelectorAll<HTMLDivElement>(".calculator__plate");

    for (let i = 0; i < plateWeights.length; i++) {
      if (plateElems[i].style.opacity === "0.1") {
        numberElems[i + 1].innerHTML = "0";
        continue;
      }
      numberElems[i + 1].innerHTML = Math.floor(
        totalWeight / (plateWeights[i] * 2)
      ).toString();
      totalWeight %= plateWeights[i] * 2;
    }
  }

  function handleClick(plateElem: HTMLDivElement) {
    if (plateElem.style.opacity === "0.1") {
      plateElem.style.opacity = "1";
    } else {
      plateElem.style.opacity = "0.1";
    }
  }

  useEffect(() => {
    const plateElems =
      document.querySelectorAll<HTMLDivElement>(".calculator__plate");
    for (let i = 0; i < plateWeights.length; i++) {
      plateElems[i].addEventListener("click", () => handleClick(plateElems[i]));
    }
  }, [plateWeights.length]);

  return (
    <div className="calculator">
      <header className="calculator__top">
        <h4 className="calculator__unit">Lbs</h4>
        <h3 className="calculator__heading">Plate Calculator</h3>
        <BsXLg className="calculator__icon" />
      </header>
      <div className="calculator__container">
        <input
          type="number"
          className="calculator__total"
          onBlur={(event) => handleBlur(Number(event.target.value))}
        />
        <div className="calculator__subtitles">
          <h5 className="calculator__subtitle">Bar</h5>
          <h5 className="calculator__subtitle">Plates (each side)</h5>
        </div>
        <div className="calculator__weights">
          <div className="calculator__bar">
            <input
              type="range"
              value={barWeight}
              min="0"
              max="11"
              className="calculator__slider"
              onChange={(event) => setBarWeight(Number(event.target.value))}
            />
            <h5 className="calculator__weight calculator__number">
              {barWeight * 5} lbs
            </h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__0 calculator__plate">55</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__1 calculator__plate">45</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__2 calculator__plate">35</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__3 calculator__plate">25</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__4 calculator__plate">10</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__5 calculator__plate">5</h5>
            <h5 className="calculator__number">0</h5>
          </div>
          <div className="calculator__box">
            <h5 className="calculator__6 calculator__plate">2.5</h5>
            <h5 className="calculator__number">0</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
