import React, { useState } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";
import UserManager from "../modules/UserManager";

//first page users see 


//Login = a function. It takes all of the arguments passed into the component. The resulting object contains all of the properties.
const Login = props => {
  //the empty object passed to useState her sets the initial value when first setting state
  //credentials is the current value of state
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFieldChange = evt => {
    //creates credentials object that has an email and a pw key on reload
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    //Step 1: Call the UserManager function to get the ONE User that matches the email input
    UserManager.getByEmail(credentials.email)
      //create an anonymous function () => {} to pass the data coming back from the promise back into .then
      //.then user gets back the entire User object of the User with the email that matches the user Input
      .then(user => {
        // Step 2: Check if we have a user at all
        // Step 3: Compare user objects pw to the credentials object pw typed into the login form
        if (user[0].password === credentials.password) {
          //user[0]is us going inside the array to get the user
          //props object contains all the data from ApplicationViews passed down to Login
          props.setUser(user[0].id);
        } else {
          window.alert("User not found, please register");
        }
      });
    // Step 4: Call setUser with the user from the database
    props.setUser(credentials);
    props.history.push("/Home");
  };

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">BookMark'd</h1>
          <p className="lead">This is a placefiller for the app logo</p>
        </Container>
      </Jumbotron>
      <Form onSubmit={handleLogin}>
      {/* handleLogin function is what updates the form */}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
          //handleFieldChange function is updating the state as user is typing into the form
            onChange={handleFieldChange}
            type="email"
            name="email"
            id="email"
            placeholder="mark@book.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            onChange={handleFieldChange}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        <Button outline color="primary">
          Submit
        </Button>{" "}
        <NavLink href="/Register">New User? Register Here</NavLink>
      </Form>
    </div>
  );
};

export default Login;
