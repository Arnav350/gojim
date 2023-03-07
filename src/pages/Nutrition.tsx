import React from "react";
import Meal from "./Meal";
import { AiOutlineLineChart, AiOutlinePlus } from "react-icons/ai";
import "./Nutrition.css";

function Nutrition() {
  return (
    <div className="nutrition">
      <div className="nutrition__top">
        <div className="nutrition__icons">
          <AiOutlineLineChart className="nutrition__icon" />
          <h2 className="nutrition__heading">Nutrition</h2>
          <AiOutlinePlus className="nutrition__icon" />
        </div>
      </div>
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
            placeholder="Meal Title..."
            className="nutrition__title"
          />
          <button className="nutrition__button">Add Meal</button>
        </div>
        <Meal />
        <Meal />
        <Meal />
      </div>
    </div>
  );
}

export default Nutrition;
