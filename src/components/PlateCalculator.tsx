import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import "./Workout.css";

function PlateCalculator() {
  const plateLbs: number[] = [55, 45, 35, 25, 10, 5, 2.5];
  const plateKgs: number[] = [25, 20, 15, 10, 5, 2.5, 1.25];

  const [totalValue, setTotalValue] = useState<number>(0);
  const [barValue, setBarValue] = useState<number>(9);
  const [numberValues, setNumberValues] = useState<number[]>(Array(7).fill(0));
  const [plateValues, setPlateValues] = useState<boolean[]>(
    Array(7).fill(false)
  );
  const [plateWeights, setPlateWeights] = useState(plateLbs);

  function handleTotalBlur() {
    let totalWeight = totalValue > barValue * 5 ? totalValue - barValue * 5 : 0;

    setNumberValues(
      plateWeights.map((plateWeight: number, i: number) => {
        if (plateValues[i] === true) {
          return 0;
        } else {
          const plateAmount = Math.floor(totalWeight / (plateWeight * 2));
          totalWeight %= plateWeight * 2;
          return plateAmount;
        }
      })
    );
  }

  function handleNumberBlur() {
    let totalWeight: number = 0;

    for (let i: number = 0; i < plateWeights.length; i++) {
      totalWeight += numberValues[i] * plateWeights[i] * 2;
    }

    setTotalValue(totalWeight + barValue * 5);
  }

  function handleUnitClick() {
    if (plateWeights[0] === 55) {
      setPlateWeights(plateKgs);
      setBarValue(Math.round(barValue / 2.2));
      setTotalValue(Math.round(totalValue / 2.2 / 2.5) * 2.5);
    } else {
      setPlateWeights(plateLbs);
      setBarValue(Math.round(barValue * 2.2));
      setTotalValue(Math.round((totalValue * 2.2) / 5) * 5);
    }
  }

  function handleClick(plateIndex: number) {
    setPlateValues(
      plateValues.map((plateValue, i) => {
        return plateIndex === i ? !plateValue : plateValue;
      })
    );
  }

  function handleChange(numberAmount: number, i: number) {
    const numberArr = [...numberValues];
    numberArr[i] = numberAmount;
    setNumberValues([...numberArr]);
  }

  return (
    <div className="calculator">
      <header className="calculator__top">
        <button className="calculator__unit" onClick={handleUnitClick}>
          {plateWeights[0] === 55 ? "Lbs" : "Kgs"}
        </button>
        <h3 className="calculator__heading">Plate Calculator</h3>
        <BsXLg className="calculator__icon" />
      </header>
      <div className="calculator__container">
        <input
          type="number"
          className="calculator__total"
          value={totalValue || ""}
          onChange={(event) => setTotalValue(Number(event.target.value))}
          onBlur={handleTotalBlur}
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
              max={plateWeights[0] === 55 ? "13" : "6"}
              className="calculator__slider"
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBarValue(Number(event.target.value))
              }
              onTouchEnd={handleTotalBlur}
              onMouseUp={() => handleTotalBlur()}
            />
            <h5 className="calculator__weight calculator__number">
              {barValue * 5} {plateWeights[0] === 55 ? "lbs" : "kgs"}
            </h5>
          </div>
          {plateWeights.map((plateWeight: number, i: number) => (
            <div className="calculator__box" key={i}>
              <button
                className={`calculator__${i} calculator__plate`}
                onMouseUp={() => handleClick(i)}
                onTouchEnd={() => handleClick(i)}
                onClick={handleTotalBlur}
                style={plateValues[i] ? { opacity: "0.1" } : undefined}
              >
                {plateWeight}
              </button>
              <input
                type="number"
                value={numberValues[i] || ""}
                className="calculator__number"
                onChange={(event) =>
                  handleChange(Number(event.target.value), i)
                }
                onBlur={handleNumberBlur}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlateCalculator;
