import React from "react";
import Icon from "./Icon";
import User from "./User";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import "./Connect.css";

function Connect() {
  return (
    <div className="connect">
      <div className="connect__top">
        <div className="connect__search">
          <AiOutlineSearch className="connect__icon" />
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
            <AiOutlinePlus className="connect__plus" />
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
