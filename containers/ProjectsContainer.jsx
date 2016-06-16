import { connect } from 'react-redux';
import Projects from '../components/Projects.jsx';
import { onProjectClicked } from '../actions/projectsAction'


const mapStateToProps = (state) => ({
	backgrounColour: state.projectsReducer.backgroundColour,
});

const mapDispatchToProps = (dispatch) => ({
	onProjectClicked: () => {
		dispatch(onProjectClicked());
	},
});

const ProjectsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Projects);

export default ProjectsContainer;
