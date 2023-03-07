import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__top">
        <p>I</p>
        <h2 className="profile__heading">username</h2>
        <p>I</p>
      </div>
      <div className="profile__user">
        <img
          src="https://picsum.photos/100"
          alt=""
          className="profile__picture"
        />
        <div className="profile__info">
          <div className="profile__text">
            <h4 className="profile__name">Arnav Patel</h4>
            <h5 className="profile__age">17</h5>
          </div>
          <div className="profile__stats">
            <div className="profile__stat">
              <p className="profile__label">Workouts</p>
              <h4 className="profile__number">2352</h4>
            </div>
            <div className="profile__stat">
              <p className="profile__label">Friends</p>
              <h4 className="profile__number">2</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__buttons">
        <button className="profile__button">Edit Profile</button>
        <button className="profile__button">Share Profile</button>
      </div>
      <div className="profile__maxes">
        <h3 className="profile__subheading">Maxes</h3>
        <p>Bench - 255</p>
        <p>Squat - 315</p>
        <p>Deadlift - 1000</p>
      </div>
    </div>
  );
}

export default Profile;
