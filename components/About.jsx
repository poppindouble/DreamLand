import React, { Component, PropTypes } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className='about-header'>
				<h1>Shuangshuang Zhao</h1>
				<h2>iOS, Front-End Developer</h2>
				<img src="../img/profile.jpg" />
			</div>
		);
	}
}

About.propTypes = {
	
};