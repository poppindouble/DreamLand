import { FETCH_PROJECTS_IF_NEEDED } from '../actions/projectsAction'

const initialState = {
	projects: [],
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_PROJECTS_IF_NEEDED: {
		return Object.assign({}, state, {
			projects: [
				{
					"name" : "Off-The-Grid",
					"description" : "Winner of Hack Western 2"
				},

				{
					"name" : "Dream-Land",
					"description" : "Personal Website"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon"
				}
			],
		});
	}
	default:
		return state;
	}
};

export default projectsReducer;