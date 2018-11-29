import React from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'formik';
import { Label } from 'reactstrap';

/* Styles */
import 'react-datepicker/dist/react-datepicker.css';
/* eslint-disable */
const FormDatepicker = ({
  className,
  form,
  field,
  inputClassName,
  placeholder,
  label,
  name,
  ...rest
}) => {
  const handleChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  // const { errors, touched } = form;
  // const error = touched[field.name] && errors[field.name];

  return (
    <div>
      <Label for={name}>{label}</Label>
      <DatePicker
        {...rest}
        id={name}
        onChange={value => handleChange(value)}
        placeholderText={placeholder}
        selected={field.value}
      />
    </div>
  );
};


export default props => <Field name={props} component={FormDatepicker} {...props} />;
