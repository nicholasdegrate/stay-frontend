import { CURRENT_HOST } from './types';

// utils
import { login } from '../../utils/detect-auth';

export const hostPostFetch = (values, setSubmitting, history) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values)
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
			.then((data) => {
				login(data.token);
				setSubmitting(false)
				history.push('/dashboard')
				dispatch({ type: CURRENT_HOST, payload: data });
			})
			.catch((err) => console.log(err));
	};
};
