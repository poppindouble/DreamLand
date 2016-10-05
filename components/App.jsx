import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx'
import CanvasProcessing from './CanvasProcessing.jsx'

import AboutContainer from '../containers/AboutContainer.jsx'
import ProjectListContainer from '../containers/ProjectListContainer.jsx';

export default class App extends Component {
	render() {
		return (
			<div id='wrapper'>
				<CanvasProcessing />
				<NavBar />
				<div>
					<AboutContainer />
					<ProjectListContainer />
				</div>
				<Footer />
			</div>
		);
	}
}