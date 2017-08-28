import { spawn } from 'redux-saga/effects';
import { watchLoadCurrentUser } from './user';

export const root = function* root() {
  yield spawn(watchLoadCurrentUser);
};
