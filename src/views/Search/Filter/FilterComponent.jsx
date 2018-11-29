import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { withFormik } from 'formik';

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
          <Input label="Price from" name="priceFrom" />
        </Col>
        <Col>
          <Input label="Price to" name="priceTo" />
        </Col>
        <Col>
          <Select label="Color" name="color" />
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

Filter.propTypes = propTypes;

export default withFormik({
  mapPropsToValues: () => ({
    dateFrom: null,
    dateTo: null,
    inStock: false,
    priceFrom: '',
    priceTo: '',
    color: '',
  }),
  handleSubmit: (e, { props: { onSubmit } }) => {
    onSubmit(e);
  },
})(Filter);
