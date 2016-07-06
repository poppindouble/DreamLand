import React, { Component, PropTypes } from 'react';
import CanvasProcessing from './CanvasProcessing.jsx'

export default class About extends Component {
	render() {
		return (
			<div className='about-section'>
				<div className='about-header'>
					<h1 className='about-name'>Shuangshuang Zhao</h1>
					<h2 className='about-title'>iOS, Front-End Developer</h2>
					<img className='about-img' src="../img/profile.jpg" />
				</div>
				<div className='about-content'>
					<p>
						I am fucking awesome! write all your shit here
					</p>
				</div>
				<CanvasProcessing />
			</div>
		);
	}
}

About.propTypes = {
	
};