import React from "react";

function Message() {
  return (
    <div className="message">
      {true && (
        <div className="message__box">
          <p className="message__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p className="message__date">1:00 pm</p>
        </div>
      )}
      {false && (
        <div className="message__box">
          <img
            src="https://picsum.photos/400"
            alt=""
            className="message__image"
          />
          <p className="message__date"></p>
        </div>
      )}
    </div>
  );
}

export default Message;
