import React, { Component, PropTypes } from 'react';
import ProjectContainer from '../containers/ProjectContainer.jsx'

export default class ProjectList extends Component {

	componentDidMount() {
		this.props.fetchProjectsIfNeeded();
	}

	render() {
		let insideElement = (
			this.props.projects.map((project, index) =>
				<ProjectContainer
					key={index}
					projectName={project.name}
					description={project.description}
				/>
			)
		);
		return (
			<div className="my-projects">
				<h1>My Projects</h1>
				{insideElement}
			</div>
		)
	}
}

ProjectList.propTypes = {

};