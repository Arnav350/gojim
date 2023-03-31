import React, { useState, Dispatch, SetStateAction } from "react";
import ChatMessage from "./ChatMessage";
import {
  BsChevronLeft,
  BsTelephone,
  BsCameraVideo,
  BsCamera,
  BsMic,
  BsImage,
} from "react-icons/bs";
import "../pages/Connect.css";

interface IProps {
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
}

interface IMessage {
  text?: string;
  image?: string;
  date: string;
}

type IMessages = IMessage[];

function Chat(props: IProps) {
  const [text, setText] = useState<string>("");

  const [messages, setMessages] = useState<IMessages>([
    {
      text: "Lorem ipsum",
      image: "https://picsum.photos/400",
      date: "3:00 PM",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas unde amet autem similique, magnam id eveniet, temporibus sequi in porro, blanditiis inventore ipsam omnis. Dolore vero expedita dolorum at?",
      date: "3:00 PM",
    },
    {
      image: "https://picsum.photos/400",
      date: "3:00 PM",
    },
  ]);

  return (
    <div className="chat">
      <header className="chat__top">
        <div className="chat__navs">
          <BsChevronLeft
            className="chat__nav"
            onClick={() => props.setCurrentUser("")}
          />
          <div className="chat__profile">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="chat__picture"
            />
            <h2 className="chat__heading">{props.currentUser}</h2>
          </div>
        </div>
        <div className="chat__navs">
          <BsTelephone className="chat__nav" />
          <BsCameraVideo className="chat__nav" />
        </div>
      </header>
      <div className="chat__messages">
        {messages.map((message: IMessage, i: number) => (
          <ChatMessage key={i} message={message} />
        ))}
      </div>
      <div className="chat__input">
        <BsCamera className="chat__icon" />
        <input
          type="text"
          value={text}
          placeholder="Message..."
          className="chat__text"
          onChange={(event) => setText(event.target.value)}
        />
        <BsMic className="chat__icon" />
        <BsImage className="chat__icon" />
      </div>
    </div>
  );
}

export default Chat;
