import React, { useState } from 'react';
import { withRouter} from 'react-router-dom';
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container
} from 'reactstrap';

// This is a Presentation Component. Directly expresses HTML.
const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
    <header>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">
        BookMark<img alt="bookmark logo" width="60px" align="justify" src="/images/bookmark.png"></img>d</h1>
        </Container>
      </Jumbotron>
      </header>
      <Navbar light>
        <NavbarBrand className="mr-auto" href="/">
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar align="right">
            {!props.hasUser
            //bang ternary statement states that if you DONT have a User then you will show them login. If you DO have a user, show "null" aka nothing
            ?
            <NavItem>
            <NavLink href="/login"><h6 className="link_text">Login</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/settings"><h6 className="link_text">Settings</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/home"><h6 className="link_text">Home</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/newBook "><h6 className="link_text">Add a New Book</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/markedForLaterList"><h6 className="link_text">Mark for Later</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/inProgressList"><h6 className="link_text">In Progress</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/completedList"><h6 className="link_text">Completed</h6></NavLink>
            </NavItem>
            : null}
            {props.hasUser 
        ? <NavItem> <span className="nav-link" onClick={handleLogout}><h6 className="link_text">Logout</h6></span></NavItem> :null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
    );
};

export default withRouter(NavBar);