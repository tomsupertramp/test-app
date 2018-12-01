import types from './types';

const initialState = {
  items: [],
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case types.TOGGLE_CART_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
