export const OPEN_PROJECT_MODAL = 'OPEN_PROJECT_MODAL';
export function openProjectModal(projectInfo) {
	return {
		type: OPEN_PROJECT_MODAL,
		projectInfo
	};
}

export const CLOSE_PROJECT_MODAL = 'CLOSE_PROJECT_MODAL';
export function closeProjectModal() {
	return {
		type: CLOSE_PROJECT_MODAL,
	};
}