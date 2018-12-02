import PropTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';
import { Field } from 'formik';
import NumberFormat from 'react-number-format';

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
  format,
  ...props
}) => {
  const error = touched[field.name] && errors[field.name];
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      {!format ? (
        <Input
          {...field}
          id={name}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <NumberFormat
          {...field}
          {...props}
          id={name}
          placeholder={placeholder}
          type={type}
        />
      )}

      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

FormInput.propTypes = propTypes;

export default props => <Field name={props} component={FormInput} {...props} />;
