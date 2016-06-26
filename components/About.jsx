import React, { Component, PropTypes } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className='about-header'>
				<h1 className='about-name'>Shuangshuang Zhao</h1>
				<h2 className='about-title'>iOS, Front-End Developer</h2>
				<img className='about-img' src="../img/profile.jpg" />
			</div>
		);
	}
}

About.propTypes = {
	
};