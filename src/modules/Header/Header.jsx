import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar color="light" light expand="md" className="header">
    <LinkContainer to="/">
      <NavbarBrand>WebShop</NavbarBrand>
    </LinkContainer>
    <Nav navbar>
      <NavItem>
        <LinkContainer to="/signup">
          <NavLink>Sign Up</NavLink>
        </LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer to="/login">
          <NavLink href="/login">Log In</NavLink>
        </LinkContainer>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
