import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/sagas';

import firstReducer from './reducers/first';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    first: firstReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
