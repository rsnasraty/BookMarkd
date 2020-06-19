import Login from "./auth/Login.js"
import { Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./components/Home"
import RegisterCard from "./auth/RegisterCard"
import AddNewReadForm from "./newReads/AddNewReadForm"


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
          //renders login component and passes setUser down to login, login then has access to set user on its PROPS
          //can pass anything into a component, then that child component will have access to that data on its props object
          // line 35 executes a function called Login and passes in the arguments that then become a propety of the props object
          return <Login setUser={setUser} {...props} 
          />;
        }}
      />


<Route
        path="/Register"
        render={props => {
          return <RegisterCard {...props} />;
        }}
      />


<Route
        path="/AddNewReadForm"
        render={props => { if (hasUser) {
            return <AddNewReadForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
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
