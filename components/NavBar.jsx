import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (
			<nav id="navbar">
				<ul>
					<li className="navbar-items">
						<Link to="/about">About Me</Link>
					</li>
					<li className="navbar-items">
						<Link to="/projects">My Projects</Link>
					</li>
				</ul>
			</nav>
		);
	}
}