import React from "react";

const UserCard = () => {
  return (
    <div className="userCard">
      <div className="userCard-content">
        <h1>
          Username: <span className="card-petname">Doodles</span>
        </h1>
        <p>Password: Poodle</p>
      </div>
    </div>
  );
};

export default UserCard;