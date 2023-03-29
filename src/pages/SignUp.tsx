import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import "./Sign.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign">
      <h1 className="sign__heading">Register</h1>
      <div className="sign__form">
        <div className="sign__names">
          <div className="sign__box">
            <BsEnvelope className="sign__icon" />
            <input
              type="text"
              placeholder="First Name"
              className="sign__input"
            />
          </div>
          <div className="sign__box">
            <BsEnvelope className="sign__icon" />
            <input
              type="text"
              placeholder="Last Name"
              className="sign__input"
            />
          </div>
        </div>
        <div className="sign__box">
          <BsEnvelope className="sign__icon" />
          <input type="text" placeholder="Email" className="sign__input" />
        </div>
        <div className="sign__box">
          <BsLock className="sign__icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="sign__input"
          />
          <button
            className="sign__eyes"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <BsEyeSlash className="sign__eye" />
            ) : (
              <BsEye className="sign__eye" />
            )}
          </button>
        </div>
        <div className="sign__box">
          <BsLock className="sign__icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="sign__input"
          />
        </div>
        <button className="sign__button">Register</button>
      </div>
      <p className="sign__bottom">
        Already have an account?{" "}
        <Link to="/signin" className="sign__link">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
