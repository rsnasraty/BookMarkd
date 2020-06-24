import React, { useState } from "react";
import UserManager from "../modules/UserManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegisterCard = props => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create User object, invoke the UserManager post method, and redirect to Home
   */
  const constructNewUser = evt => {
    evt.preventDefault();
    if (user.password !== user.confirmPassword) {
      window.alert("Passwords must match");
    } else {
      setIsLoading(true);
      // Create the User and redirect user to Home
      UserManager.post(user).then(() => props.history.push("/Home"));
    }
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            required
            onChange={handleFieldChange}
            name="email"
            id="email"
            placeholder="mark@book.com"
          />
        </FormGroup>

        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="username"
            required
            onChange={handleFieldChange}
            name="username"
            id="username"
            placeholder="readingrainbow"
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            required
            onChange={handleFieldChange}
            name="password"
            id="password"
            placeholder="R3@D123"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Password</Label>
          <Input
            type="password"
            required
            onChange={handleFieldChange}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="R3@D123"
          />
        </FormGroup>

        <div className="alignRight">
          <Button
            disabled={isLoading}
            onClick={constructNewUser}
            outline
            color="primary"
          >
            Submit
          </Button>{" "}
        
        </div>
      </Form>
    </>
  );
};

export default RegisterCard;
