import { combineReducers } from 'redux';
import { user } from './user';
import { list } from './list';

const rootReducer = combineReducers({
  user,
  list,
});

export default rootReducer;
