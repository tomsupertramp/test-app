import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';


/* Components */
import Filter from './Filter';
import Products from './Products';

const propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  updateCart: PropTypes.func,
};

const SearchComponent = ({ products, fetchProducts, updateCart }) => (
  <div>
    <Row>
      <Col>
        <Filter onSubmit={fetchProducts} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Products
          products={products}
          updateCart={updateCart}
        />
      </Col>
    </Row>
  </div>
);

SearchComponent.propTypes = propTypes;

export default SearchComponent;
