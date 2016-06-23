import { OPEN_PROJECT_MODAL } from '../actions/projectModalAction'

const initialState = {
	isOpen: false,
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_PROJECT_MODAL:
			return Object.assign({}, state, {
				isOpen: true,
			});
		default:
			return state;
	}
};

export default modalReducer;