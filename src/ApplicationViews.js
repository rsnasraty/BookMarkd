import Login from "./auth/Login.js"
import { Route} from "react-router-dom";
import React from "react";
import Home from "./auth/Home.js"

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Login />;
        }}
      />


<Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

<Route
        exact
        path="/home"
        render={props => {
          return <Home />;
        }}
      />

      




    </React.Fragment>
  );
};

export default ApplicationViews;
