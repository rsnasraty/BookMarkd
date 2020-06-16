import React, { useEffect, useState } from 'react';
import UserManager from "../modules/UserManager"
import Login from "../auth/Login"

const UserCard = () => {
    const [users,setUsers]= useState([]);

  const getUsers = () => {
    return UserManager.getAll().then(usersFromAPI => {
        setUsers(usersFromAPI)
      });
    };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-cards">
      {users.map(user => <Login key={user.id} user={user}/>)}
    </div>
  );
};

export default UserCard