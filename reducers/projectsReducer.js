import { ON_PROJECT_CLICKED } from '../actions/projectsAction'

const initialState = {
	name: '',
	backgroundColour: 'black',
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
	case ON_PROJECT_CLICKED: {
		return Object.assign({}, state, {
			backgroundColour: 'yellow',
		});
	}
	default:
		return state;
	}
};

export default projectsReducer;