import { CURRENT_HOST } from '../actions/types';

const initialState = {
	currentUser: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CURRENT_HOST:
			return { ...state, currentUser: action.payload };
		default:
			return state;
	}
}
