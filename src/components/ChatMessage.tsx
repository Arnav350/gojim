import React from "react";
import "../pages/Connect.css";

interface IMessage {
  text?: string;
  image?: string;
  date: string;
}

interface IProps {
  message: IMessage;
}

function ChatMessage(props: IProps) {
  return (
    <div className="my message">
      {props.message.text && (
        <div className="message__box">
          <p className="message__text">
            {props.message.text}
            <span className="message__space">{props.message.date}</span>
          </p>
          <p className="message__date">{props.message.date}</p>
        </div>
      )}
      {props.message.image && (
        <figure className="message__figure">
          <img src={props.message.image} alt="" className="message__image" />
          <figcaption className="message__caption">
            {props.message.date}
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export default ChatMessage;
