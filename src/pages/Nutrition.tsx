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
          <AiOutlinePlus className="nutrition__icon" />
        </div>
        <h1 className="nutrition__heading">Nutrition</h1>
      </div>
      <div className="nutrition__macros">
        <h3 className="nutrition__subheading">Macros</h3>
        <div className="nutrition__circles">
          <div className="nutrition__protein">
            <h2 className="nutrition__grams">130g</h2>
            <h5 className="nutrition__total">/ 160g</h5>
            <p className="nutrition__label">Protein</p>
          </div>
          <div className="nutrition__fat">
            <h2 className="nutrition__grams">130g</h2>
            <h5 className="nutrition__total">/ 160g</h5>
            <p className="nutrition__label">Fat</p>
          </div>
          <div className="nutrition__carb">
            <h2 className="nutrition__grams">130g</h2>
            <h5 className="nutrition__total">/ 160g</h5>
            <p className="nutrition__label">Carbs</p>
          </div>
        </div>
      </div>
      <div className="nutrition__meals">
        <div className="nutrition__add"></div>
        <Meal />
      </div>
    </div>
  );
}

export default Nutrition;
