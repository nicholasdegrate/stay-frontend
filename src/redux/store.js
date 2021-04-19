import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  Reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;