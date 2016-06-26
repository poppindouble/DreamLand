import React, { Component } from 'react';

export default class Footer extends Component {

	onLinkedInClicked() {
		console.log("Linked in got clicked")
	}

	onFacebookClicked() {
		console.log("facebook got clicked")
	}

	render() {
		return (
			<footer className="footer">
				<button onClick={this.onLinkedInClicked}>
					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
				</button>
				<button onClick={this.onFacebookClicked}>
					<i className="fa fa-facebook-official" aria-hidden="true"></i>
				</button>
			</footer>
		);
	}
}