import React, { useRef, useState } from "react";
import {
  BsArrowLeft,
  BsPencilSquare,
  BsCheckLg,
  BsSearch,
  BsUpcScan,
  BsStopwatch,
  BsBasket,
  BsPlus,
} from "react-icons/bs";
import "../pages/Nutrition.css";

interface IProps {
  setShowFood: Function;
  meals: string[];
  setMeals: Function;
}

interface IHistory {
  name: string;
  calories: number;
  amount: number;
  amountType: string;
}

type IHistories = IHistory[];

function Food(props: IProps) {
  const heading = useRef<HTMLInputElement>(null!);

  const [edit, setEdit] = useState<boolean>(false);
  const [mealName, setMealName] = useState<string>("Meal Name");

  const [histories, setHistories] = useState<IHistories>([
    {
      name: "Extra Virgin Olive Oil",
      calories: 460,
      amount: 4,
      amountType: "tbsp",
    },
    {
      name: "Pizza",
      calories: 600,
      amount: 2,
      amountType: "slices",
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

  function handleBlur() {
    // if (mealName) {
    //   props.setMeals([...props.meals, mealName]);
    // } else {
    //   props.setMeals([...props.meals, "Meal Name"]);
    // }
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
            onBlur={handleBlur}
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
          {histories.map((history: IHistory, i: number) => (
            <div key={i} className="food__history">
              <div className="food__text">
                <h4 className="food__name">{history.name}</h4>
                <p className="food__info">
                  {history.calories} cal - {history.amount} {history.amountType}
                </p>
              </div>
              {true ? (
                <BsPlus className="food__add" />
              ) : (
                <BsCheckLg className="food__add" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Food;
