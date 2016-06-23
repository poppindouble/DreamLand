import React, { Component, PropTypes } from 'react';
import ProjectContainer from '../containers/ProjectContainer.jsx';
import ProjectModalContainer from '../containers/ProjectModalContainer.jsx'

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
			<div>
				<div className="my-projects">
					<h1>My Projects</h1>
					{insideElement}
				</div>
				<ProjectModalContainer />
			</div>
		)
	}
}

ProjectList.propTypes = {

};