import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList.jsx';
import { fetchProjectsIfNeeded } from '../actions/projectsAction'


const mapStateToProps = (state) => ({
	projects: state.projectsReducer.projects,
});

const mapDispatchToProps = (dispatch) => ({
	fetchProjectsIfNeeded: () => {
		dispatch(fetchProjectsIfNeeded());
	},
});

const ProjectListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectList);

export default ProjectListContainer;
