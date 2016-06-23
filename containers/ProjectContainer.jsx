import { connect } from 'react-redux';
import Project from '../components/Project.jsx';
import { openProjectModal } from '../actions/projectModalAction.js'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onProjectClicked: () => {
		dispatch(openProjectModal(ownProps));
	}
});

const ProjectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Project);

export default ProjectContainer;
