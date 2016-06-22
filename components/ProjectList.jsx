import React, { Component, PropTypes } from 'react';
import ProjectContainer from '../containers/ProjectContainer.jsx'

export default class ProjectList extends Component {

	constructor() {
		super();
		this.onProjectClicked = this.onProjectClicked.bind(this);
	}

	onProjectClicked() {
		this.props.onProjectClicked()
	}

	render() {
		let insideElement;
		insideElement = (
				<ProjectContainer
					projectName="Off-The-Grid"
					description="Winner of Hack Western 2"
				/>
			);

		return (
			<div className="my-projects">
				<h1>{this.props.backgrounColour}</h1>
				{insideElement}

			</div>
		)
	}
}

ProjectList.propTypes = {

};