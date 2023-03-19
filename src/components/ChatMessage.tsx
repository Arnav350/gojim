import React from "react";

function ChatMessage() {
  return (
    <div className="my message">
      {true && (
        <div className="message__box">
          <p className="message__text">
            Lorem ipsu
            <span className="message__space">1:00 PM</span>
          </p>
          <p className="message__date">1:00 PM</p>
        </div>
      )}
      {true && (
        <figure className="message__figure">
          <img
            src="https://picsum.photos/400"
            alt=""
            className="message__image"
          />
          <figcaption className="message__caption">1:00 PM</figcaption>
        </figure>
      )}
    </div>
  );
}

export default ChatMessage;
