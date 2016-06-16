import React, { Component, PropTypes } from 'react';

export default class Projects extends Component {
	render() {

		return (
			<div className="my-projects">
				<h1>{this.props.backgrounColour}</h1>

				<div className="project-item">
					<button onClick={this.props.onProjectClicked}>My Button</button>
				</div>

				<div className="project-item">
					<button>My Button</button>
				</div>

				<div className="project-item">

				</div>

				<div className="project-item">

				</div>

				<div className="project-item">

				</div>

				<div className="project-item">

				</div>

				<div className="project-item">

				</div>
			</div>
		)
	}
}

Projects.propTypes = {

};