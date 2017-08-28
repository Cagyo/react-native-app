import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../ducks';
import { root } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) =>
    action.type !== 'EFFECT_TRIGGERED' &&
    action.type !== 'EFFECT_RESOLVED',
});

export function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
    promiseMiddleware,
  ));
  sagaMiddleware.run(root);

  return store;
}
