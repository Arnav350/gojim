import React, { useState } from "react";
import Food from "../components/Food";
import Meal from "../components/Meal";
import { BsGraphUp, BsPlusLg } from "react-icons/bs";
import "./Nutrition.css";

function Nutrition() {
  const [showFood, setShowFood] = useState(false);

  const [mealTitle, setMealTitle] = useState("");

  return (
    <main className="nutrition">
      <header className="nutrition__top">
        <BsGraphUp className="nutrition__nav" />
        <h2 className="nutrition__heading">Nutrition</h2>
        <BsPlusLg
          className="nutrition__nav"
          onClick={() => setShowFood(true)}
        />
      </header>
      <div className="nutrition__scroll">
        <div className="nutrition__macros">
          <h3 className="nutrition__subheading">Macros</h3>
          <div className="nutrition__circles">
            <div className="nutrition__circle nutrition__calorie">
              <h2 className="nutrition__grams">2000cal</h2>
              <h5 className="nutrition__total">/ 3000cal</h5>
              <p className="nutrition__label">Calories</p>
            </div>
            <div className="nutrition__circle nutrition__protein">
              <h2 className="nutrition__grams">130g</h2>
              <h5 className="nutrition__total">/ 160g</h5>
              <p className="nutrition__label">Protein</p>
            </div>
            <div className="nutrition__circle nutrition__fat">
              <h2 className="nutrition__grams">130g</h2>
              <h5 className="nutrition__total">/ 160g</h5>
              <p className="nutrition__label">Fat</p>
            </div>
            <div className="nutrition__circle nutrition__carb">
              <h2 className="nutrition__grams">130g</h2>
              <h5 className="nutrition__total">/ 160g</h5>
              <p className="nutrition__label">Carbs</p>
            </div>
            <div className="nutrition__circle nutrition__water">
              <h2 className="nutrition__grams">8oz</h2>
              <h5 className="nutrition__total">/ 96g</h5>
              <p className="nutrition__label">Water</p>
            </div>
          </div>
        </div>
        <div className="nutrition__meals">
          <h3 className="nutrition__subheading">Meals</h3>
          <div className="nutrition__add">
            <input
              type="text"
              value={mealTitle}
              placeholder="Meal Title..."
              className="nutrition__input"
              onChange={(event) => setMealTitle(event.target.value)}
            />
            <button
              className="nutrition__button"
              onClick={() => setShowFood(true)}
            >
              Add Meal
            </button>
          </div>
          <Meal />
          <Meal />
          <Meal />
        </div>
      </div>
      {showFood && <Food setShowFood={setShowFood} />}
    </main>
  );
}

export default Nutrition;
