import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (
			<nav id="navbar">
				<ul>
					<li className="navbar-items">
						<a href="#About">About Me</a>
					</li>
					<li className="navbar-items">
						<a href="#ProjectList">My Projects</a>
					</li>
				</ul>
			</nav>
		);
	}
}