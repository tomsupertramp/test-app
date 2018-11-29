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

const Signup = () => (
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form title="Sign up">
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
          <Input
            label="Password"
            name="confirm_password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary">Sign up</Button>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

Signup.propTypes = propTypes;

export default Signup;
