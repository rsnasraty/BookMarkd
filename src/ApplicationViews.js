import Login from "./auth/Login.js"
import { Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./components/Home"
import RegisterCard from "./auth/RegisterCard"
/* import UserCard from "./auth/UserCard" */

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>

<Route
        exact
        path="/Home"
        render={props => { if (hasUser) {
            return <Home {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />



<Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />


<Route
        path="/Register"
        render={props => {
          return <RegisterCard {...props} />;
        }}
      />


{/* 
<Route path="/users" render={(props) => {
      return <UserCard />
    }} />
 */}

{/* <Route
        exact
        path="/login"
        render={props => {
          if (hasUser) {
            return <Home {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      /> */}








    </React.Fragment>
  );
};

export default ApplicationViews;
