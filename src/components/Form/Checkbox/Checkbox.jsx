import PropTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';
import { Field } from 'formik';

const propTypes = {
  label: PropTypes.string,
};

const Checkbox = ({
  label,
  field,
}) => (
  <Label check>
    <Input
      type="checkbox"
      {...field}
    />
    {' '}
    {label}
  </Label>
);

Checkbox.propTypes = propTypes;

export default props => <Field name={props} component={Checkbox} {...props} />;
