import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.jsx';
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router';


require('./stylesheets/main.scss');

const store = configureStore()

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));