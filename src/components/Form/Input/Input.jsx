import PropTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';
import { Field } from 'formik';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

const FormInput = ({
  name,
  field,
  // form,
  label,
  placeholder,
  type,
}) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input
      {...field}
      id={name}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

FormInput.propTypes = propTypes;

export default props => <Field name={props} component={FormInput} {...props} />;
