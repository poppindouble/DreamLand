import { connect } from 'react-redux';
import ProjectModal from '../components/ProjectModal.jsx';
import { closeProjectModal } from '../actions/projectModalAction'

const mapStateToProps = (state) => ({
	isOpen: state.modalReducer.isOpen,
	projectInfo: state.modalReducer.projectInfo,
});

const mapDispatchToProps = (dispatch) => ({
	onClose: () => {
		dispatch(closeProjectModal());
	},
});

const ProjectModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectModal);

export default ProjectModalContainer;
