import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer.js';
import modalReducer from './modalReducer.js'

const builderApp = combineReducers({
  projectsReducer,
  modalReducer,
});

export default builderApp;
