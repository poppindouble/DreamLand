import { combineReducers } from 'redux';
import testReducer from './testReducer.js';


const builderApp = combineReducers({
  testReducer,
});

export default builderApp;
