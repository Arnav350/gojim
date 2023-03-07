import React from "react";
import { Link } from "react-router-dom";
import "../pages/Nutrition.css";

function Meal() {
  return (
    <div className="meal">
      <div className="meal__top">
        <h4 className="meal__heading">Lunch</h4>
        <h4 className="meal__total">2400</h4>
      </div>
      <div className="meal__box">
        <div className="meal__info">
          <p className="meal__name">Giant Chocolate Chip Cookie wwwwwwwwwwww</p>
          <p className="meal__amount">20 grams</p>
        </div>
        <p className="meal__calorie">120</p>
      </div>
      <div className="meal__box">
        <div className="meal__info">
          <p className="meal__name">Giant Chocolate Chip Cookie wwwwwwwwwwww</p>
          <p className="meal__amount">20 grams</p>
        </div>
        <p className="meal__calorie">120</p>
      </div>
      <div className="meal__box">
        <div className="meal__info">
          <p className="meal__name">Giant Chocolate Chip Cookie wwwwwwwwwwww</p>
          <p className="meal__amount">20 grams</p>
        </div>
        <p className="meal__calorie">120</p>
      </div>
      <Link to="/food">
        <button className="meal__button">Add Food</button>
      </Link>
    </div>
  );
}

export default Meal;
