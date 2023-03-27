import React, { useState } from "react";
import ConnectUser from "../components/ConnectUser";
import { BsSearch, BsPlusLg, BsArrowRepeat } from "react-icons/bs";
import "./Connect.css";

interface IStory {
  picture: string;
  name: string;
  seen?: boolean;
}

type IStories = IStory[];

function Connect() {
  const seen = true;

  const [stories, setStories] = useState<IStories>([
    { picture: "https://picsum.photos/200/300", name: "Arnav Patel" },
    {
      picture: "https://picsum.photos/200/300",
      name: "Arnav Patel",
      seen,
    },
    { picture: "https://picsum.photos/200/300", name: "Arnav Patel" },
  ]);
  const [users, setUsers] = useState([]);

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
          <div className="connect__outline">
            <div className="connect__new">
              <BsPlusLg className="connect__plus" />
            </div>
            <p className="connect__name">Add story</p>
          </div>
          {stories.map((story: IStory, i: number) => (
            <div
              key={i}
              className="connect__outline"
              style={story.seen ? { border: "2px solid #eee" } : undefined}
            >
              <img
                src={story.picture}
                alt=""
                className="connect__picture"
                style={story.seen ? { opacity: "0.4" } : undefined}
              />
              <p className="connect__name">{story.name}</p>
              {story.seen && <BsArrowRepeat className="connect__seen" />}
            </div>
          ))}
        </div>
        <div className="connect__contacts">
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
          <ConnectUser />
        </div>
      </div>
    </main>
  );
}

export default Connect;
