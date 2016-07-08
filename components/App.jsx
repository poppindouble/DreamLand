import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx'
import Main from './Main.jsx'
import CanvasProcessing from './CanvasProcessing.jsx'

export default class App extends Component {
	render() {
		return (
			<div id='wrapper'>
				<CanvasProcessing />
				<NavBar />
				<div>
					<Main children={this.props.children} />
				</div>
				<Footer />
			</div>
		);
	}
}