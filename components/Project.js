import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
	render() {
		<div className="project-item">
			<img src='../img/off-the-grid.jpg' />
			<div className='prject-item-overlay'>
				<h3>Project Name</h3>
				<p>Description</p>
				<button onClick={this.onProjectClicked}>
					<i className="fa fa-eye" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	}
}