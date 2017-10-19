import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {
	const action = {
		type: ADD_REMINDER,
		text
	}
	return action;
}

export const deleteReminder = (key) => {
	const action = {
		type: DELETE_REMINDER,
		key
	}
	console.log('deleting in actions', action);
	return action;
}