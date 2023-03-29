import React from "react";
import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaUtensils,
  FaTrophy,
  FaCommentAlt,
  FaUser,
} from "react-icons/fa";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/gym">
        <FaDumbbell className="nav__icon" />
      </Link>
      <Link to="/nutrition">
        <FaUtensils className="nav__icon" />
      </Link>
      <Link to="/compete">
        <FaTrophy className="nav__icon" />
      </Link>
      <Link to="/connect">
        <FaCommentAlt className="nav__icon" />
      </Link>
      <Link to="/profile">
        <FaUser className="nav__icon" />
      </Link>
    </div>
  );
}

export default Nav;
