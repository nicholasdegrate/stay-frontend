import { HANDLE_PAGE_CLICK,PAGE_COUNT,  HANDLE_DRAWER, FETCH_ALL_PROPERTIES, NEW_PROPERTY } from '../actions/types';

const initialState = {
	handleDrawer: null,
	properties: [],
	property: {},
	pageCount: null,
	pageHandleChange: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case HANDLE_DRAWER:
			return { ...state, handleDrawer: action.payload };
		case FETCH_ALL_PROPERTIES:
			return { ...state, properties: action.payload };
		case NEW_PROPERTY:
			return {...state, properties: [action.payload, ...state.properties]};
		case HANDLE_PAGE_CLICK:
			return {...state, pageHandleChange: action.payload};
		case PAGE_COUNT:
			return {...state, pageCount: action.payload};
		default:
			return state;
	}
}
