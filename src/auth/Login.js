import React, { useState} from "react"
import { Jumbotron, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = props => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };

      const handleLogin = (e) => {
        e.preventDefault();

        props.setUser(credentials)
        props.history.push("/Home");
      }

  return (
 
    <Form onSubmit={handleLogin}>
    
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">BookMark'd</h1>
          <p className="lead">This is a placefiller for the app logo</p>
        </Container>
      </Jumbotron>
      <InputGroup onChange={handleFieldChange}  type="username"
            id="username" size="lg">
        <InputGroupAddon  addonType="prepend">
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <InputGroup onChange={handleFieldChange} type="password"
            id="password"  size="lg">
      <InputGroupAddon addonType="prepend">
          <InputGroupText>Password</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      <br />
      <button type="submit">Submit </button>
    </Form>

  );
};

export default Login;