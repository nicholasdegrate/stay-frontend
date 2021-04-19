import { combineReducers } from 'redux';
import currentHostReducer from './currentHostReducer';
import propertyReducer from './propertyReducer'


export default combineReducers({
  currentHost: currentHostReducer,
  property: propertyReducer
});