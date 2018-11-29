import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';


/* Components */
import Filter from './Filter';
import Products from './Products';

const propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const SearchComponent = ({ products, fetchProducts }) => (
  <div>
    <Row>
      <Col>
        <Filter onSubmit={fetchProducts} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Products products={products} />
      </Col>
    </Row>
  </div>
);

SearchComponent.propTypes = propTypes;

export default SearchComponent;
