import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

//Basically my User Edit Form

const Settings = props => {
  const [editedUser, setEditedUsers] = useState({
    userId: parseInt(sessionStorage.getItem("credentials")),
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...editedUser };
    stateToChange[evt.target.id] = evt.target.value;
    setEditedUsers(stateToChange);
  };

  const updateExistingUser = evt => {
    evt.preventDefault();
    setIsLoading(true);

    UserManager.updateUser(editedUser).then(() =>
      props.history.push("/settings")
    );
  };

  useEffect(() => {
    UserManager.get(parseInt(sessionStorage.getItem("credentials"))).then(
      editedUser => {
        setEditedUsers(editedUser);
        setIsLoading(false);
      }
    );
  }, []);

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
            value={editedUser.email}
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
            value={editedUser.username}
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
            value={editedUser.password}
          />
        </FormGroup>

        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            required
            onChange={handleFieldChange}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="R3@D123"
            value={editedUser.confirmPassword}
          />
        </FormGroup>

        <div className="alignRight">
          <Button
            disabled={isLoading}
            onClick={updateExistingUser}
            outline
            color="success"
          >
            Submit
          </Button>{" "}
        </div>
      </Form>
    </>
  );
};

export default Settings;
