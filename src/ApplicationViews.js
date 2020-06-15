import Login from "./auth/Login.js"
import { Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./components/Home"

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>

<Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

<Route
        exact
        path="/login"
        render={props => {
          if (hasUser) {
            return <Home {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />








    </React.Fragment>
  );
};

export default ApplicationViews;
