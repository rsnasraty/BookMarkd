import React, { useState} from "react"
import { Button, Jumbotron, Container, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';

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
 <div>
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">BookMark'd</h1>
          <p className="lead">This is a placefiller for the app logo</p>
        </Container>
      </Jumbotron>
<Form onSubmit={handleLogin}>
<FormGroup>
<Label for="email">Email</Label>
        <Input onChange={handleFieldChange} type="email" name="email" id="email" placeholder="mark@book.com" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input onChange={handleFieldChange} type="password" name="password" id="Password" placeholder="password" />
      </FormGroup>
      <Button outline color="primary">Submit</Button>{' '}
      <NavLink href="/Register">New User? Register Here</NavLink>
    </Form>
</div>
  );
};

export default Login;