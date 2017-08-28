import { put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_CURRENT_USER,
  receiveCurrentUser,
} from '../ducks/user';

const requestUser = function* requestUser() {
  const user = 'Username';

  yield put(receiveCurrentUser(user));
};

export const watchLoadCurrentUser = function* watchLoadCurrentUser() {
  yield takeLatest(REQUEST_CURRENT_USER, requestUser);
};
