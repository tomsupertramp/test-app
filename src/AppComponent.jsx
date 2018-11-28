import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Components */
import Search from 'views/Search';
import Home from 'views/Home';

/* Modules */
import Header from 'modules/Header';
import { Container, Col, Row } from 'reactstrap';

const propTypes = {
  isAuthenticated: PropTypes.bool,
};

const AppComponent = ({ isAuthenticated }) => {
  const Component = isAuthenticated
    ? Search
    : Home;

  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Route path="/" component={Component} />
        </Col>
      </Row>
    </Container>
  );
};

AppComponent.propTypes = propTypes;

export default AppComponent;
