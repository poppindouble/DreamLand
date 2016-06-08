import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.jsx';
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router';
import AboutContainer from './containers/AboutContainer.jsx';
import ProjectsContainer from './containers/ProjectsContainer.jsx'

const store = configureStore()

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path='/about' component={AboutContainer} />
				<Route path='/projects' component={ProjectsContainer} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));