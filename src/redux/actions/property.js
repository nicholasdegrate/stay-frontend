import { FETCH_ALL_PROPERTIES, NEW_PROPERTY } from './types';

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
			.then(({ data }) => {
				const properties = data.filter(
					(currentUserProperties) => currentUserProperties.attributes['host-id'] === id
				);
				dispatch({ type: FETCH_ALL_PROPERTIES, payload: properties });
			})
			.catch((err) => console.log(err));
	};
};

export const postFetchProperties = (properties) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/properties', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(properties)
		})
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
				dispatch({ type: NEW_PROPERTY, payload: data[0]})
			})
			.catch(console.log);
	};
};
