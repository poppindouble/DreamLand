import React, { Component, PropTypes } from 'react';

export default class Projects extends Component {
	render() {

		return (
			<div className="my-projects">
				<h1>{this.props.backgrounColour}</h1>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>

				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>

				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>
				</div>
				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>

					</div>
				</div>
			</div>
		)
	}
}

Projects.propTypes = {

};