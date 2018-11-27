import React from 'react';
import { Navbar, NavItem, NavLink } from 'reactstrap';

const Header = () => (
  <Navbar color="light" light>
    <NavItem>
      <NavLink href="/signup">Sign Up</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/login">Log In</NavLink>
    </NavItem>
  </Navbar>
);

export default Header;
