import React from "react";
import ChatMessage from "../components/ChatMessage";
import {
  BsChevronLeft,
  BsTelephone,
  BsCameraVideo,
  BsCamera,
  BsMic,
  BsImage,
} from "react-icons/bs";
import "./Chat.css";

function Chat() {
  return (
    <main className="chat">
      <header className="chat__top">
        <div className="chat__navs">
          <BsChevronLeft className="chat__nav" />
          <div className="chat__profile">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="chat__picture"
            />
            <h2 className="chat__heading">Lorem ipsumdolor</h2>
          </div>
        </div>
        <div className="chat__navs">
          <BsTelephone className="chat__nav" />
          <BsCameraVideo className="chat__nav" />
        </div>
      </header>
      <div className="chat__messages">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chat__input">
        <BsCamera className="chat__icon" />
        <input type="text" placeholder="Message..." className="chat__text" />
        <BsMic className="chat__icon" />
        <BsImage className="chat__icon" />
      </div>
    </main>
  );
}

export default Chat;
