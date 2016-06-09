import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div id="main-panel">
				{this.props.children}
			</div>
		);
	}
}

Main.propTypes = {
	children: React.PropTypes.object,
};
