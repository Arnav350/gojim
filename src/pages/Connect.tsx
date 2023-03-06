import React from "react";
import "./Connect.css";

function Connect() {
  return (
    <div className="connect">
      <div className="connect__top">
        <input
          type="text"
          placeholder="Search user"
          className="connect__search"
        />
      </div>
      <div className="connect__stories">
        <div className="connect__new"></div>
        <img src="" alt="" className="connect__story" />
        <img src="" alt="" className="connect__story" />
        <img src="" alt="" className="connect__story" />
      </div>
      <div className="connect__contacts">
        <div className="connect__contact">
          <img src="" alt="" className="connect__picture" />
          <div className="connect__text">
            <h2 className="connect__name">Arnav Patel</h2>
            <p className="connect__last">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              amet quasi vero dolorum obcaecati nostrum? Ipsa natus tempore hic
              debitis dolorem cum ut saepe ullam, nostrum, quia sapiente
              consequuntur eligendi?
            </p>
          </div>
          <p className="connect__time">4:32 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Connect;
