import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { withFormik } from 'formik';
import { compose, lifecycle } from 'recompose';
import { debounce, isEqual } from 'lodash';

/* Components */
import Form, {
  Checkbox,
  Datepicker,
  Select,
  Input,
} from 'components/Form';

/* eslint-disable */

const propTypes = {
  props: PropTypes.object,
};

const Filter = (props) => {
  // console.log(props);
  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col>
          <Datepicker label="Date From" name="dateFrom" />
        </Col>
        <Col>
          <Datepicker label="Date To" name="dateTo" />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Checkbox label="In stock only" name="inStock" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Price from" name="priceFrom" type="number" step="0.01" />
        </Col>
        <Col>
          <Input label="Price to" name="priceTo" type="number" step="0.01" />
        </Col>
        <Col>
          <Select label="Color" name="color" />
        </Col>
      </Row>
    </Form>
  );
};

Filter.propTypes = propTypes;

export default compose(

  withFormik({
    mapPropsToValues: () => ({
      dateFrom: null,
      dateTo: null,
      inStock: false,
      priceFrom: '',
      priceTo: '',
      color: '',
    }),
    handleSubmit: (values, { props: { onSubmit } }) => {
      onSubmit(values);
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { values, onSubmit } = nextProps;
      const autoSave = debounce(() => {
        onSubmit(values);
      }, 300);
      if (!isEqual(values, this.props.values)) {
        autoSave();
      }
    }
  }),
)(Filter);
