import React, { useRef, useState } from "react";
import History from "../components/History";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsPencilSquare,
  BsCheckLg,
  BsSearch,
  BsUpcScan,
  BsStopwatch,
  BsBasket,
} from "react-icons/bs";
import "./Food.css";

function Food() {
  const heading = useRef<HTMLInputElement>(null!);

  const [edit, setEdit] = useState<boolean>(false);
  const [inp, setInp] = useState<string>("Meal Name");

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
    <div className="food">
      <div className="food__top">
        <div className="food__header">
          <Link to="/nutrition">
            <BsArrowLeft className="food__nav" />
          </Link>
          <input
            type="text"
            placeholder="Meal Name"
            value={inp}
            readOnly={true}
            className="food__heading"
            ref={heading}
            onChange={(event) => setInp(event.target.value)}
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
      </div>
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
        <History />
        <History />
        <History />
      </div>
    </div>
  );
}

export default Food;
