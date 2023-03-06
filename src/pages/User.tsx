import React from "react";

function User() {
  return (
    <div className="user">
      <img src="https://picsum.photos/200" alt="" className="user__picture" />
      <div className="user__text">
        <div className="user__top">
          <h4 className="user__name">Arnav Patel</h4>
          <p className="user__timestamp">4:32 PM</p>
        </div>
        <p className="user__last">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet
          quasi vero dolorum obcaecati nostrum? Ipsa natus tempore hic debitis
          dolorem cum ut saepe ullam, nostrum, quia sapiente consequuntur
          eligendi?
        </p>
      </div>
    </div>
  );
}

export default User;
