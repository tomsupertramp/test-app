import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import bcrypt from 'bcryptjs';

/* Types */
import types from './types';

const salt = bcrypt.genSaltSync(10);

function* signup({ values }) {
  try {
    const { username, password } = values;

    if (localStorage.getItem(username)) {
      yield put({ type: types.SIGNUP_FAILURE, error: 'User already exist' });
    } else {
      const hash = bcrypt.hashSync(password, salt);
      localStorage.setItem(username, hash);
      yield put({ type: types.SIGNUP_SUCCESS });
    }
  } catch (e) {
    yield put({ type: types.LOGIN_FAILURE, error: e.message });
  }
}

function* login({ values }) {
  try {
    const { username, password } = values;
    if (!localStorage.getItem(username) || !bcrypt.compareSync(password, localStorage.getItem(username))) {
      yield put({ type: types.LOGIN_FAILURE, error: 'The username or password is incorrect' });
    } else {
      yield put(push('/'));
      yield put({ type: types.LOGIN_SUCCESS, user: username });
    }
  } catch (e) {
    yield put({ type: types.LOGIN_FAILURE, error: e.message });
  }
}

export function* servicesSaga() {
  yield takeLatest(types.SIGNUP_REQUEST, signup);
  yield takeLatest(types.LOGIN_REQUEST, login);
}
