import types from './types';

const updateCart = item => ({ type: types.UPDATE_CART, item });

export default {
  updateCart,
};
