import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// This is a Presentation Component. Directly expresses HTML.
const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <header>
     <h1 className="site-title">
     
      </h1>
      </header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BookMarkd</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {!props.hasUser
            //bang ternary statement here states that if you DONT have a User then you will show them login. If you DO have a user, show "null" aka nothing
            ?
            <NavItem>
            <NavLink href="/login">Login</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/Home">Home</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/AddNewReadForm">Add a New Read</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/MarkedForLaterList">Marked For Later</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/InProgressList">In Progress</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/CompletedList">Completed</NavLink>
            </NavItem>
            : null}
            {props.hasUser 
        ? <NavItem> <span className="nav-link" onClick={handleLogout}> Logout </span></NavItem> :null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
};

export default withRouter(NavBar);