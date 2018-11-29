import PropTypes from 'prop-types';
import React from 'react';
import { Form as ReactstrapForm } from 'reactstrap';

const propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
};

const Form = ({ children, onSubmit, title }) => (
  <div>
    <h2 className="form-title">{title}</h2>
    <ReactstrapForm onSubmit={onSubmit}>{children}</ReactstrapForm>
  </div>
);

Form.propTypes = propTypes;

export default Form;
