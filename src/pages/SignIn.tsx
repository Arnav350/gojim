import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import "./Sign.css";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="sign">
      <div className="sign__background"></div>
      <h1 className="sign__heading">Login</h1>
      <div className="sign__form">
        <div className="sign__box">
          <BsEnvelope className="sign__icon" />
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="sign__input"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="sign__box">
          <BsLock className="sign__icon" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            className="sign__input"
            onChange={(event) => setPassword(event.target.value)}
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
        <button className="sign__button">Login</button>
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
