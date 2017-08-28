import { put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_USER_DATA,
  receiveUserData,
} from '../ducks/user';

const requestUser = function* requestUser() {
  // request

  yield put(receiveUserData({}));
};

export const watchLoadCurrentUser = function* watchLoadCurrentUser() {
  yield takeLatest(REQUEST_USER_DATA, requestUser);
};
