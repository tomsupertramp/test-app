// import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Col,
  Row,
  FormGroup,
} from 'reactstrap';

/* Components */
import Form, { Input } from 'components/Form';

const propTypes = {};

const Login = () => (
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form title="Log in">
        <FormGroup>
          <Input
            label="Username"
            name="username"
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Password"
            name="password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary">Log in</Button>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

Login.propTypes = propTypes;

export default Login;
