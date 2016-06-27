import React, { Component, PropTypes } from 'react';

export default class CanvasProcessing extends Component {
	render() {
		return (
			<svg width="640" height="480">
      			<circle cx="50" cy="50" r="40" stroke="black" fill="white"/>
    		</svg>
		);
	}
}

CanvasProcessing.propTypes = {
};