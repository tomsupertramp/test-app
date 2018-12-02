import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Col,
  Row,
  FormGroup,
  Alert,
} from 'reactstrap';

/* Components */
import Form, { Input } from 'components/Form';

const propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  successSignup: PropTypes.bool,
};

const SignupComponent = ({ handleSubmit, successSignup, error }) => (
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form title="Sign up" onSubmit={handleSubmit}>
        {successSignup && <Alert color="success">Success registration!</Alert>}
        {error && <Alert color="danger">{error}</Alert>}
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
            label="Confirm password"
            name="passwordConfirm"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">Sign up</Button>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

SignupComponent.propTypes = propTypes;

export default SignupComponent;
