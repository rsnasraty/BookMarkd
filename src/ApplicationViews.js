import Login from "./auth/Login.js"
import { Route, Redirect} from "react-router-dom";
import React from "react";
import Home from "./components/Home"
import RegisterCard from "./auth/RegisterCard"
import AddNewReadForm from "./newReads/AddNewReadForm"
import InProgressList from "./inProgress/InProgressList"
import MarkedForLaterList from "./markedForLater/MarkedForLaterList"
import CompletedList from "./Completed/CompletedList"


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
          // line 36 executes a function called Login and passes in the arguments that then become a property of the props object
          return <Login setUser={setUser} {...props} 
          />;
        }}
      />

<Route
        path="/InProgressList"
        render={props => {
          return <InProgressList {...props} 
          />;
        }}
      />

<Route
        path="/MarkedForLaterList"
        render={props => {
          return <MarkedForLaterList {...props} 
          />;
        }}
      />

<Route
        path="/CompletedList"
        render={props => {
          return <CompletedList {...props} 
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
