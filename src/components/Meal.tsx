import React, { useState, Dispatch, SetStateAction } from "react";
import "../pages/Nutrition.css";

interface IProps {
  title: string;
  setCurrentMeal: Dispatch<SetStateAction<string>>;
  setShowFood: Dispatch<SetStateAction<boolean>>;
}

interface IFood {
  name: string;
  grams: number;
  calories: number;
}

type IFoods = IFood[];

function Meal(props: IProps) {
  const [foods, setFoods] = useState<IFoods>([
    { name: "Pasta", grams: 200, calories: 800 },
    { name: "Chocolate and Marshmellow Cookie", grams: 1000, calories: 10000 },
    { name: "Orange Slices", grams: 5, calories: 10 },
  ]);

  function handleClick() {
    props.setShowFood(true);
    props.setCurrentMeal(props.title);
  }

  return (
    <div className="meal">
      <div className="meal__top">
        <h4 className="meal__heading">{props.title}</h4>
        <h4 className="meal__total">
          {foods.reduce(
            (total: number, { calories }) => (total += calories),
            0
          )}
        </h4>
      </div>
      {foods.map((food: IFood, i: number) => (
        <div key={i} className="meal__box">
          <div className="meal__info">
            <p className="meal__name">{food.name}</p>
            <p className="meal__amount">{food.grams} grams</p>
          </div>
          <p className="meal__calories">{food.calories}</p>
        </div>
      ))}
      <button className="meal__button" onClick={handleClick}>
        Add Food
      </button>
    </div>
  );
}

export default Meal;
