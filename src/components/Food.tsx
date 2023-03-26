import React, { useRef, useState } from "react";
import NutritionHistory from "./NutritionHistory";
import {
  BsArrowLeft,
  BsPencilSquare,
  BsCheckLg,
  BsSearch,
  BsUpcScan,
  BsStopwatch,
  BsBasket,
} from "react-icons/bs";
import "../pages/Nutrition.css";

interface IProps {
  setShowFood: Function;
}

function Food(props: IProps) {
  const heading = useRef<HTMLInputElement>(null!);

  const [edit, setEdit] = useState<boolean>(false);
  const [mealName, setMealName] = useState<string>("Meal Name");

  const [histories, setHistories] = useState([
    {
      name: "Extra Virgin Olive Oil",
      calories: 460,
      amount: 4,
      amountType: "tbsp",
    },
  ]);

  function toggleHeadingEdit() {
    if (edit) {
      setEdit(false);
      heading.current.readOnly = true;
    } else {
      setEdit(true);
      heading.current.readOnly = false;
      heading.current.select();
    }
  }

  return (
    <main className="food">
      <header className="food__top">
        <div className="food__header">
          <BsArrowLeft
            className="food__nav"
            onClick={() => props.setShowFood(false)}
          />
          <input
            type="text"
            placeholder="Meal Name"
            value={mealName}
            readOnly={true}
            className="food__heading"
            ref={heading}
            onChange={(event) => setMealName(event.target.value)}
          />
          <button className="food__edit" onClick={toggleHeadingEdit}>
            {edit ? (
              <BsCheckLg className="food__nav" />
            ) : (
              <BsPencilSquare className="food__nav" />
            )}
          </button>
        </div>
        <div className="food__search">
          <BsSearch className="food__magnify" />
          <input
            type="text"
            placeholder="Search food"
            className="food__input"
          />
        </div>
      </header>
      <div className="food__scroll">
        <div className="food__types">
          <button className="food__type">
            <BsUpcScan className="food__icon" />
            <h4 className="food__subtitle">Scan Barcode</h4>
          </button>
          <button className="food__type">
            <BsBasket className="food__icon" />
            <h4 className="food__subtitle">My Foods</h4>
          </button>
          <button className="food__type">
            <BsStopwatch className="food__icon" />
            <h4 className="food__subtitle">Quick Add</h4>
          </button>
          <button className="food__type">
            <BsSearch className="food__icon" />
            <h4 className="food__subtitle">Search Food</h4>
          </button>
        </div>
        <div className="food__box">
          <h3 className="food__subheading">History</h3>
          <NutritionHistory />
          <NutritionHistory />
          <NutritionHistory />
        </div>
      </div>
    </main>
  );
}

export default Food;
