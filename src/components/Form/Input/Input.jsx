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
  form: { touched, errors },
  label,
  placeholder,
  type,
}) => {
  const error = touched[field.name] && errors[field.name];
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...field}
        id={name}
        placeholder={placeholder}
        type={type}
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

FormInput.propTypes = propTypes;

export default props => <Field name={props} component={FormInput} {...props} />;
