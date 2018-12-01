import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';

/* Types */
import types from './types';

function* signup({ values }) {
  try {
    const { username, password } = values;

    if (localStorage.getItem(username)) {
      yield put({ type: types.SIGNUP_FAILURE, error: 'User already exist' });
    } else {
      localStorage.setItem(username, password);
      yield put({ type: types.SIGNUP_SUCCESS });
    }
  } catch (e) {
    yield put({ type: types.LOGIN_FAILURE, error: e.message });
  }
}

function* login({ values }) {
  try {
    const { username, password } = values;
    if (!localStorage.getItem(username) || localStorage.getItem(username) !== password) {
      yield put({ type: types.LOGIN_FAILURE, error: 'The username or password is incorrect' });
    } else {
      yield put({ type: types.LOGIN_SUCCESS, user: username });
      yield put(push('/'));
    }
  } catch (e) {
    yield put({ type: types.LOGIN_FAILURE, error: e.message });
  }
}

export function* servicesSaga() {
  yield takeLatest(types.SIGNUP_REQUEST, signup);
  yield takeLatest(types.LOGIN_REQUEST, login);
}
