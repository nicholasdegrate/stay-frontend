import { combineReducers } from 'redux';
import currentHostReducer from './currentHostReducer';

export default combineReducers({
  currentHost: currentHostReducer
});