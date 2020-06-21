import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews.js"

//need to introduce conditional rendering 

//passes setUser to applicationviews, which then passes it down via props to login


const BookMark = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());
//saves authenticated user's info into session storage so I can use it later
  const setUser = userId => {
    sessionStorage.setItem("credentials", parseInt(userId));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default BookMark;