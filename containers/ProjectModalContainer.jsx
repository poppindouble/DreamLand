import { connect } from 'react-redux';
import ProjectModal from '../components/ProjectModal.jsx';

const mapStateToProps = (state) => ({
	isOpen: state.modalReducer.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
	
});

const ProjectModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectModal);

export default ProjectModalContainer;
