import React, { useState } from "react";
import Chat from "../components/Chat";
import { BsSearch, BsPlusLg, BsArrowRepeat } from "react-icons/bs";
import "./Connect.css";

interface IStory {
  picture: string;
  name: string;
  seen?: boolean;
}

type IStories = IStory[];

interface IUser {
  picture: string;
  name: string;
  time: string;
  last: string;
  seen?: boolean;
}

type IUsers = IUser[];

const seen: boolean = true;

function Connect() {
  const [currentUser, setCurrentUser] = useState<string>("");

  const [stories, setStories] = useState<IStories>([
    { picture: "https://picsum.photos/200/300", name: "Arnav Patel" },
    {
      picture: "https://picsum.photos/200/300",
      name: "Arnav Patel",
      seen,
    },
    { picture: "https://picsum.photos/200/300", name: "Arnav Patel" },
  ]);

  const [users, setUsers] = useState<IUsers>([
    {
      picture: "https://picsum.photos/200",
      name: "Arnav Patel",
      time: "4:32 PM",
      last: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet quasi vero dolorum obcaecati nostrum? Ipsa natus tempore hic debitis dolorem cum ut saepe ullam, nostrum, quia sapiente consequuntur eligendi?",
    },
    {
      picture: "https://picsum.photos/200",
      name: "Arnav Patel",
      time: "4:32 PM",
      last: "Lorem ipsum dolor sit",
      seen,
    },
    {
      picture: "https://picsum.photos/200",
      name: "Arnav Patel",
      time: "4:32 PM",
      last: "Lorem ipsum dolor sit",
    },
    {
      picture: "https://picsum.photos/200",
      name: "Arnav Patel",
      time: "4:32 PM",
      last: "Lorem ipsum dolor sit",
    },
  ]);

  return (
    <main className="connect">
      <header className="connect__top">
        <div className="connect__search">
          <BsSearch className="connect__magnify" />
          <input
            type="text"
            placeholder="Search user"
            className="connect__input"
          />
        </div>
      </header>
      <div className="connect__scroll">
        <div className="connect__stories">
          <div className="connect__story">
            <div className="connect__new">
              <BsPlusLg className="connect__plus" />
            </div>
            <p className="connect__text">Add story</p>
          </div>
          {stories.map((story: IStory, i: number) => (
            <div
              key={i}
              className="connect__story"
              style={story.seen ? { border: "2px solid #eee" } : undefined}
            >
              <img
                src={story.picture}
                alt=""
                className="connect__picture"
                style={story.seen ? { opacity: "0.4" } : undefined}
              />
              <p className="connect__text">{story.name}</p>
              {story.seen && <BsArrowRepeat className="connect__replay" />}
            </div>
          ))}
        </div>
        <div className="connect__contacts">
          {users.map((user: IUser, i: number) => (
            <div
              key={i}
              className="connect__contact"
              onClick={() => setCurrentUser(user.name)}
            >
              <div
                className="connect__circle"
                style={user.seen ? { backgroundColor: "#487" } : undefined}
              ></div>
              <img src={user.picture} alt="" className="connect__avatar" />
              <div className="connect__user">
                <div className="connect__info">
                  <h4 className="connect__name">{user.name}</h4>
                  <p className="connect__time">{user.time}</p>
                </div>
                <p className="connect__last">{user.last}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentUser && (
        <Chat currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </main>
  );
}

export default Connect;
