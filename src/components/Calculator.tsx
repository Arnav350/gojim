import React, { useState, useRef } from "react";
import { BsXLg } from "react-icons/bs";

function Calculator() {
  const totalRef = useRef<HTMLInputElement>(null!);

  const [barValue, setBarValue] = useState<number>(9);

  const plateWeights: number[] = [55, 45, 35, 25, 10, 5, 2.5];

  function handleTotalBlur(
    totalWeight: number = Number(totalRef.current.value)
  ) {
    totalWeight -= barValue * 5;

    if (totalWeight < 0) {
      return;
    }

    const numberElems = document.querySelectorAll<HTMLInputElement>(
      ".calculator__number"
    );
    const plateElems =
      document.querySelectorAll<HTMLHeadingElement>(".calculator__plate");

    for (let i = 0; i < plateWeights.length; i++) {
      if (plateElems[i].style.opacity === "0.1") {
        numberElems[i + 1].value = "";
        continue;
      }

      const plateAmount = Math.floor(totalWeight / (plateWeights[i] * 2));

      numberElems[i + 1].value = plateAmount ? plateAmount.toString() : "";
      totalWeight %= plateWeights[i] * 2;
    }
  }

  function handleNumberBlur() {
    const numberElems = document.querySelectorAll<HTMLInputElement>(
      ".calculator__number"
    );

    let totalWeight: number = 0;

    for (let i: number = 0; i < plateWeights.length; i++) {
      totalWeight += Number(numberElems[i + 1].value) * plateWeights[i] * 2;
    }

    totalWeight += barValue * 5;
    if (totalRef) {
      totalRef.current.value = totalWeight.toString();
    }
  }

  function handleClick(plateIndex: number) {
    const plateElem = document.querySelector<HTMLHeadingElement>(
      `.calculator__${plateIndex}`
    );
    if (plateElem) {
      if (plateElem.style.opacity === "0.1") {
        plateElem.style.opacity = "1";
      } else {
        plateElem.style.opacity = "0.1";
      }
    }
    handleTotalBlur();
  }

  function handleChange(barWeight: number) {
    setBarValue(barWeight);
    handleTotalBlur();
  }

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
          ref={totalRef}
          onBlur={(event) => handleTotalBlur(Number(event.target.value))}
        />
        <div className="calculator__subtitles">
          <h5 className="calculator__subtitle">Bar</h5>
          <h5 className="calculator__subtitle">Plates (each side)</h5>
        </div>
        <div className="calculator__weights">
          <div className="calculator__bar">
            <input
              type="range"
              value={barValue}
              min="0"
              max="13"
              className="calculator__slider"
              onChange={(event) => handleChange(Number(event.target.value))}
            />
            <h5 className="calculator__weight calculator__number">
              {barValue * 5} lbs
            </h5>
          </div>
          {plateWeights.map((plateWeight: number, i: number) => (
            <div className="calculator__box" key={i}>
              <h5
                className={`calculator__${i} calculator__plate`}
                onClick={() => handleClick(i)}
              >
                {plateWeight}
              </h5>
              <input
                type="number"
                className="calculator__number"
                onBlur={handleNumberBlur}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
