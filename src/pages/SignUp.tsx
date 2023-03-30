import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsPerson,
  BsEnvelope,
  BsLock,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";
import "./Sign.css";

function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign">
      <div className="sign__background"></div>
      <h1 className="sign__heading">Register</h1>
      <div className="sign__form">
        <div className="sign__names">
          <div className="sign__box">
            <BsPerson className="sign__icon" />
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="sign__input"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="sign__box">
            <BsPerson className="sign__icon" />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              className="sign__input"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
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
        <div className="sign__box">
          <BsLock className="sign__icon" />
          <input
            type={showPassword ? "text" : "password"}
            value={passwordConfirm}
            placeholder="Confirm Password"
            className="sign__input"
            onChange={(event) => setPasswordConfirm(event.target.value)}
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
