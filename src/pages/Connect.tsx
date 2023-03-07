import React from "react";
import Icon from "../components/Icon";
import User from "../components/User";
import { BsSearch, BsPlusLg } from "react-icons/bs";
import "./Connect.css";

function Connect() {
  return (
    <div className="connect">
      <div className="connect__top">
        <div className="connect__search">
          <BsSearch className="connect__magnify" />
          <input
            type="text"
            placeholder="Search user"
            className="connect__input"
          />
        </div>
      </div>
      <div className="connect__stories">
        <div className="connect__outline">
          <div className="connect__new">
            <BsPlusLg className="connect__plus" />
          </div>
          <p className="connect__add">Add story</p>
        </div>
        <Icon />
        <Icon />
        <Icon />
      </div>
      <div className="connect__contacts">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Connect;
