import React, { Component, PropTypes } from 'react';

export default class Projects extends Component {

	constructor() {
		super();
		this.onProjectClicked = this.onProjectClicked.bind(this);
	}

	onProjectClicked() {
		this.props.onProjectClicked()
	}


	render() {
		return (
			<div className="my-projects">
				<h1>{this.props.backgrounColour}</h1>

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

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>

				<div className="project-item">
					<img src='../img/off-the-grid.jpg' />
					<div className='prject-item-overlay'>
						<h3>Project Name</h3>
						<p>Description</p>
						<i className="fa fa-github-alt" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
}

Projects.propTypes = {

};