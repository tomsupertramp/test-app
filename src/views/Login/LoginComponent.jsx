import PropTypes from 'prop-types';
import React from 'react';
import {
  Alert,
  Button,
  Col,
  Row,
  FormGroup,
} from 'reactstrap';

/* Components */
import Form, { Input } from 'components/Form';

const propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

const LoginComponent = ({ handleSubmit, error }) => (
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form title="Log in" onSubmit={handleSubmit}>
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
          <Button color="primary" type="submit">Log in</Button>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

LoginComponent.propTypes = propTypes;

export default LoginComponent;
