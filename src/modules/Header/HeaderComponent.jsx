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

/* Components */
import Cart from 'modules/Cart';

const propTypes = {
  cartItemsCount: PropTypes.number,
  toggleCartModal: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.string,
};

const HeaderComponent = ({
  cartItemsCount,
  toggleCartModal,
  isAuthenticated,
  user,
}) => (
  <Navbar color="light" light expand="md" className="header">
    <LinkContainer to="/">
      <NavbarBrand>WebShop</NavbarBrand>
    </LinkContainer>
    {isAuthenticated ? (
      <div>
        Hello,
        {' '}
        {user}
        !
      </div>
    ) : (
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
    )}
    {isAuthenticated && (
      <Button
        className="ml-auto"
        color="success"
        onClick={() => toggleCartModal()}
      >
        Cart:
        {' '}
        {cartItemsCount}
      </Button>
    )}
    <Cart />
  </Navbar>
);

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
