import React from 'react';
import { Jumbotron, Container, Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <div>
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
      
    </div>
  );
};

export default Login;