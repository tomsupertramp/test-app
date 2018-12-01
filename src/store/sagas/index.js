import {
  all,
  fork,
} from 'redux-saga/effects';

/* Sagas */
import { servicesSaga } from 'services/ducks';

export default function* rootSaga() {
  yield all([
    fork(servicesSaga),
  ]);
}
