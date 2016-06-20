import React, { Component, PropTypes } from 'react';

export default class Projects extends Component {
	render() {

		return (
			<div className="my-projects">
				<h1>{this.props.backgrounColour}</h1>

				<div className="project-item">

					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
}

Projects.propTypes = {

};