import Login from "./auth/Login.js";
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import RegisterCard from "./auth/RegisterCard";
import UserList from "./auth/UserList"
import Settings from "./auth/Settings"
import AddNewReadForm from "./newReads/AddNewReadForm";
import InProgressList from "./inProgress/InProgressList";
import InProgressEdit from "./inProgress/InProgressEdit";
import MarkedForLaterList from "./markedForLater/MarkedForLaterList";
import MarkedForLaterEdit from "./markedForLater/MarkedForLaterEdit"
import CompletedList from "./Completed/CompletedList";
import CompletedEdit from "./Completed/CompletedEdit";


//dictates which component should be rendered when links are clicked depending on if a user is logged in or not
//Controller Component. Its only responsibility is to control the behavior of the system and maps URLs to components.

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/Home"
        render={props => {
          if (hasUser) {
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
          return <Login setUser={setUser} {...props} />;
        }}
      />

      <Route exact
        path="/InProgressList"
        render={props => {
          return <InProgressList {...props} />;
        }}
      />

<Route
        exact
        path="/Settings"
        render={props => {
          if (hasUser) {
            return <Settings {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />


<Route exact
        path="/UserList"
        render={props => {
          return <UserList {...props} />;
        }}
      />


      <Route exact
        path="/MarkedForLaterList"
        render={props => {
          return <MarkedForLaterList {...props} />;
        }}
      />

      <Route exact
        path="/CompletedList"
        render={props => {
          return <CompletedList {...props} />;
        }}
      />

      <Route
        path="/Register"
        render={props => {
          return <RegisterCard {...props} />;
        }}
      />

      <Route
        exact
        path="/AddNewReadForm"
        render={props => {
          if (hasUser) {
            return <AddNewReadForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

{/* (\d+) means digit of any value, readingMaterialsId is a taco passed into CompletedEdit component */}
      <Route
        path="/CompletedList/:readingMaterialsId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return (
              <CompletedEdit
                readingMaterialsId={parseInt(
                  props.match.params.readingMaterialsId
                )}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />


<Route
        path="/InProgressList/:readingMaterialsId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return (
              <InProgressEdit
                readingMaterialsId={parseInt(
                  props.match.params.readingMaterialsId
                )}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

<Route
        path="/MarkedForLaterList/:readingMaterialsId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return (
              <MarkedForLaterEdit
                readingMaterialsId={parseInt(
                  props.match.params.readingMaterialsId
                )}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

<Route
        path="/UserList/:userId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return (
              <Settings
                userId={parseInt(
                  props.match.params.userId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />







    </React.Fragment>
  );
};

export default ApplicationViews;
