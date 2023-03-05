import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell, FaUtensils, FaCommentAlt, FaUser } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <FaDumbbell className="footer__icon" />
      <FaUtensils className="footer__icon" />
      <FaCommentAlt className="footer__icon" />
      <FaUser className="footer__icon" />
    </div>
  );
}

export default Footer;
