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
					"description" : "Winner of Hack Western 2",
					"details" : "1",
				},

				{
					"name" : "Dream-Land",
					"description" : "Personal Website",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				},

				{
					"name" : "Watson",
					"description" : "Watson Hackathon",
					"details" : "off line sharing drawing panel, it is really useful when you don't have internet",
				}
			],
		});
	}
	default:
		return state;
	}
};

export default projectsReducer;