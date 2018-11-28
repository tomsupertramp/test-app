import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Routes */
import Signup from 'views/Signup';
import Login from 'views/Login';

const propTypes = {
  location: PropTypes.object,
};

const HomeComponent = ({ location }) => (
  <div>
    <Switch location={location}>
      <Route path="/" exact><span>Hello</span></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);

HomeComponent.propTypes = propTypes;


export default HomeComponent;
