import React, { useState } from "react"
import { Jumbotron, Container, Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };

      const handleLogin = (e) => {
        e.preventDefault();

        props.setUser(credentials)
        props.history.push("/Welcome");
      }

  return (
 
    <Container>
    <Row>
    <Col>
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">BookMark'd</h1>
          <p className="lead">This is a placefiller for the app logo</p>
        </Container>
      </Jumbotron>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">
          <InputGroupText>Password</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      <br />
      <Button color="secondary" size="mg">Submit</Button>
      </Col>
      </Row>
      </Container>
    

  );
};

export default Login;