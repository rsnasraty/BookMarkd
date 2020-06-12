import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <InputGroup>
      <InputGroupAddon addonType="prepend">
          <InputGroupText>Password</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      
      
      
    </div>
  );
};

export default Login;