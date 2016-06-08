import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}