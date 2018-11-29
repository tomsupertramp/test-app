import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

/* Routes */
import Signup from 'views/Signup';
import Login from 'views/Login';

const propTypes = {
  location: PropTypes.object,
};

const HomeComponent = ({ location }) => (
  <Switch location={location}>
    <Route path="/" exact>
      <Jumbotron>
        <h1>Test-app</h1>
      </Jumbotron>
    </Route>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Redirect to="/" />
  </Switch>
);

HomeComponent.propTypes = propTypes;


export default HomeComponent;
