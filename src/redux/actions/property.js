import { FETCH_ALL_PROPERTIES } from './types';

export const getFetchProperties = (id) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/properties')
			.then((r) => {
				if (r.ok) {
					return r.json();
				} else {
					return r.json().then((data) => {
						throw data;
					});
				}
			})
			.then(({data}) => {
				const properties = data.filter(currentUserProperties => currentUserProperties.attributes['host-id'] === id )
				dispatch({type: FETCH_ALL_PROPERTIES, payload: properties })
			})
			.catch((err) => console.log(err));
	};
};
