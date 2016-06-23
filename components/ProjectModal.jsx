import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

export default class ProjectModal extends Component {

	render() {
		return (
			<div>
				<Modal
					isOpen={this.props.isOpen}
					onRequestClose={this.props.onClose}
					className="project-modal"
					overlayClassName="project-modal-overlay"
				>
					<h2>This is a Modal</h2>
				</Modal>
			</div>
		);
	}
}