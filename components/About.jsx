import React, { Component, PropTypes } from 'react';

export default class About extends Component {
	render() {
		return (
			<a name='About'>
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
				</div>
			</a>
		);
	}
}

About.propTypes = {
	
};