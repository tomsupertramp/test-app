import PropTypes from 'prop-types';
import React from 'react';
import { map } from 'lodash';

/* Components */
import Card from '../Card';

const propTypes = {
  products: PropTypes.array,
};

const Products = ({ products }) => (
  <div>{map(products, item => <Card key={item.id} {...item} />)}</div>
);

Products.propTypes = propTypes;

export default Products;
