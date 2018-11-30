import PropTypes from 'prop-types';
import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Button,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

const propTypes = {
  cartItemsCount: PropTypes.number,
};

const HeaderComponent = ({ cartItemsCount }) => (
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
    <Button className="ml-auto" color="success">
      Cart:
      {' '}
      {cartItemsCount}
    </Button>
  </Navbar>
);

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
