import types from './types';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  isAuthenticated: false,
  successSignup: false,
  error: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        successSignup: false,
        error: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        successSignup: true,
        error: null,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        error: null,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        successSignup: false,
        error: null,
      };
    default:
      return state;
  }
};
