import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'
import createLogger from 'redux-logger';

export default function configureStore() {
	const loggerMiddleware = createLogger();
  	const store = createStore(
  		rootReducer,
  		applyMiddleware(
  			thunkMiddleware,
  			loggerMiddleware
  			)
  		)
  	return store
}
