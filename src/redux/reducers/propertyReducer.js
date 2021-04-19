import { HANDLE_DRAWER, FETCH_ALL_PROPERTIES, NEW_PROPERTY } from '../actions/types';

const initialState = {
	handleDrawer: null,
	properties: [],
	property: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case HANDLE_DRAWER:
			return { ...state, handleDrawer: action.payload };
		case FETCH_ALL_PROPERTIES:
			return { ...state, properties: action.payload };
		case NEW_PROPERTY:
			return {...state, property: action.payload};
		default:
			return state;
	}
}
