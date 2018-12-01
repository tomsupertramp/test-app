import types from './types';

const signup = values => ({ type: types.SIGNUP_REQUEST, values });
const login = values => ({ type: types.LOGIN_REQUEST, values });

export default {
  signup,
  login,
};
