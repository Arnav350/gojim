import React from "react";
import { Link } from "react-router-dom";
import "../pages/Connect.css";

interface IProps {
  picture: string;
  name: string;
  last: string;
  time: string;
  seen?: boolean;
}

function ConnectUser(props: IProps) {
  return (
    <Link to="/chat" className="user">
      <img src={props.picture} alt="" className="user__picture" />
      <div className="user__text">
        <div className="user__top">
          <h4 className="user__name">{props.name}</h4>
          <p
            className="user__timestamp"
            style={
              props.seen ? { color: "#eee", fontWeight: "500" } : undefined
            }
          >
            {props.time}
          </p>
        </div>
        <p
          className="user__last"
          style={props.seen ? { color: "#eee", fontWeight: "500" } : undefined}
        >
          {props.last}
        </p>
      </div>
    </Link>
  );
}

export default ConnectUser;
