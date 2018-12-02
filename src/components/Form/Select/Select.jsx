import PropTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';
import { Field } from 'formik';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

const FormSelect = ({
  children,
  name,
  label,
  placeholder,
  field,
}) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      placeholder={placeholder}
      type="select"
      {...field}
    >
      {children}
    </Input>
  </div>
);

FormSelect.propTypes = propTypes;

export default props => <Field name={props} component={FormSelect} {...props} />;
