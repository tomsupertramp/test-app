import types from './types';

const updateCart = item => ({ type: types.UPDATE_CART, item });
const toggleCartModal = () => ({ type: types.TOGGLE_CART_MODAL });

export default {
  updateCart,
  toggleCartModal,
};
