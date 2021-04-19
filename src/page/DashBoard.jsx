import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { logout } from '../utils/detect-auth';

export default function DashBoard() {
	const history = useHistory();
	const user = useSelector((state) => state.currentHost);

	console.log(user);

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	return (
		<div>
			<div>dashboard</div>
			<button onClick={handleLogout}>logout</button>
		</div>
	);
}
