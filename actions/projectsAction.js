export const FETCH_PROJECTS_IF_NEEDED = 'FETCH_PROJECTS_IF_NEEDED';
export function fetchProjectsIfNeeded() {
	return {
		type: FETCH_PROJECTS_IF_NEEDED,
	};
}