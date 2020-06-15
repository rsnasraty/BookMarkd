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
            <NavItem>
            <NavLink href="/BookMark">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/login">Login</NavLink>
            </NavItem>
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/newReads">New Reads</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/markedForLater">Marked For Later</NavLink>
            </NavItem>
            : null}
            {props.hasUser
            ?
            <NavItem>
            <NavLink href="/inProgress">In Progress</NavLink>
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