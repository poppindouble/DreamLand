import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<button onClick={this.onProjectClicked}>
					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
				</button>
			</footer>
		);
	}
}