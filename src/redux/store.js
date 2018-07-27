import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import firstReducer from './reducers/first';

const store = createStore(
  combineReducers({
    first: firstReducer
  }),
  applyMiddleware(thunk)
);

export default store;
