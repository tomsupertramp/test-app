import PropTypes from 'prop-types';
import React from 'react';
import { map } from 'lodash';

/* Components */
import Card from 'components/Card';

const propTypes = {
  products: PropTypes.array,
  updateCart: PropTypes.func,
};

const Products = ({ products, updateCart }) => (
  <div>
    {map(products, item => (
      <Card
        key={item.id}
        handleClick={() => updateCart(item)}
        {...item}
      />
    ))}
  </div>
);

Products.propTypes = propTypes;

export default Products;
