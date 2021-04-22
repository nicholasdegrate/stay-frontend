import {
	DELETE_PROPERTY,
	PATCH_FETCH_PROPERTY,
	SHOW_PROPERTY,
	HANDLE_PAGE_CLICK,
	PAGE_COUNT,
	HANDLE_DRAWER,
	FETCH_ALL_PROPERTIES,
	NEW_PROPERTY,
	FETCH_PROPERTIES_FOR_ALL_CLIENTS
} from '../actions/types';

const initialState = {
	handleDrawer: null,
	properties: [],
	property: {},
	pageCount: null,
	pageHandleChange: null,
	showProperty: {
		data: {
			attributes: {
				'address-description': '',
				'address-name': '',
				bathrooms: '',
				bedrooms: '',
				door: '',
				energy: '',
				guests: '',
				location: '',
				Noise: '',
				price: null,
				'property-type': ''
			}
		}
	},
	all_properties_for_clients: { data: [] }
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case HANDLE_DRAWER:
			return { ...state, handleDrawer: action.payload };
		case FETCH_ALL_PROPERTIES:
			return { ...state, properties: action.payload };
		case NEW_PROPERTY:
			return { ...state, properties: [ action.payload, ...state.properties ] };
		case HANDLE_PAGE_CLICK:
			return { ...state, pageHandleChange: action.payload };
		case PAGE_COUNT:
			return { ...state, pageCount: action.payload };
		case SHOW_PROPERTY:
			return { ...state, showProperty: action.payload };
		case PATCH_FETCH_PROPERTY:
			const patchPropertyFromJSON = [...state.properties].map((property) => {
				if (property.id === action.payload.id) return action.payload;
				return property;
			});
			return { ...state, properties: [...patchPropertyFromJSON] };
		case DELETE_PROPERTY:
			const deletePropertyFromJSON = [ ...state.properties ].filter((id) => id.id !== action.payload);
			return { ...state, properties: [ ...deletePropertyFromJSON ] };
		case FETCH_PROPERTIES_FOR_ALL_CLIENTS:
			return { ...state, all_properties_for_clients: action.payload };
		default:
			return state;
	}
}
