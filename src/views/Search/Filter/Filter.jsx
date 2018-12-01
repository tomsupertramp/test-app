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

const propTypes = {
  handleSubmit: PropTypes.func,
};

const Filter = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Row>
      <Col>
        <Datepicker label="Date From" name="dateFrom" />
      </Col>
      <Col>
        <Datepicker label="Date To" name="dateTo" />
      </Col>
      <Col sm={{ size: 2, offset: 2 }} className="align-middle">
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
    },
  }),
)(Filter);
