import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer.js';


const builderApp = combineReducers({
  projectsReducer,
});

export default builderApp;
