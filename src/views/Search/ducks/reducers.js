import types from './types';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
