import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/sagas';

import { reducer as formReducer } from 'redux-form';
import userReducer from './reducers/user';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    form: formReducer,
    user: userReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
