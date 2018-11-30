import types from './types';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
};
