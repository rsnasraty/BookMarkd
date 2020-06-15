import Login from "./auth/Login.js"
import { Route, Redirect} from "react-router-dom";
import React from "react";
import BookMark from "./BookMark"

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
        path="/BookMark"
        render={props => { if (hasUser) {
            return <BookMark {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      




    </React.Fragment>
  );
};

export default ApplicationViews;
