import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList.jsx';
import { onProjectClicked } from '../actions/projectsAction'


const mapStateToProps = (state) => ({
	backgrounColour: state.projectsReducer.backgroundColour,
});

const mapDispatchToProps = (dispatch) => ({
	onProjectClicked: () => {
		dispatch(onProjectClicked());
	},
});

const ProjectListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectList);

export default ProjectListContainer;
