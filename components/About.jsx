import React, { Component, PropTypes } from 'react';
import CanvasProcessingContainer from '../containers/CanvasProcessingContainer.jsx'


export default class About extends Component {
	render() {
		return (
			<div className='about-header'>
				<h1 className='about-name'>Shuangshuang Zhao</h1>
				<h2 className='about-title'>iOS, Front-End Developer</h2>
				<img className='about-img' src="../img/profile.jpg" />
				<CanvasProcessingContainer />
			</div>
		);
	}
}

About.propTypes = {
	
};