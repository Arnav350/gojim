import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import "./Sign.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign">
      <h1 className="sign__heading">Login</h1>
      <div className="sign__form">
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
        <input type="submit" value="Login" className="sign__button" />
      </div>
      <p className="sign__bottom">
        Don't have an account?{" "}
        <Link to="/signup" className="sign__link">
          Register
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
