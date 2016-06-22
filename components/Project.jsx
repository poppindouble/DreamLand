import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="project-item">
				<img src='../img/off-the-grid.jpg' />
				<div className='prject-item-overlay'>
					<h3>{`${this.props.projectName}`}</h3>
					<p>{`${this.props.description}`}</p>
					<button onClick={this.onProjectClicked}>
						<i className="fa fa-eye" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		);
	}
}

Project.propTypes = {
};