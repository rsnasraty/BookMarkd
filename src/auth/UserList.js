import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import RegisterCard from "./RegisterCard";

const UserList = props => {
  const [editedUser, setEditedUsers] = useState([]);
  const id = sessionStorage.getItem("credentials");

  useEffect(() => {
    UserManager.get(id).then(editedUser => {
      setEditedUsers(editedUser);
    });
  }, []);

  return (
    <div>
      {editedUser.map(userObject => (
        <RegisterCard key={userObject.id} userObject={userObject} {...props} />
      ))}
    </div>
  );
};

export default UserList;
