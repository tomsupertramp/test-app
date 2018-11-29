import { filter } from 'lodash';

import types from './types';

/* Data */
import data from '../data.json';

/* eslint-disable */

const fetchProducts = (params) => {
  let filteredProducts = data;
  if (params) {
    console.log(params.color);
    filteredProducts = filter(data, {
      // 'inStock': params.inStock,
      'color': params.color,
    });
    // console.log(products);
  }


  return { type: types.FETCH_PRODUCTS_SUCCESS, products: filteredProducts };
};

export default {
  fetchProducts,
};
