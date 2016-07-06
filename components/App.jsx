import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx'
import Main from './Main.jsx'

export default class App extends Component {
	render() {
		return (
			<div id='wrapper'>
				<NavBar />
				<div>
					<Main children={this.props.children} />
				</div>
				<Footer />
			</div>
		);
	}
}