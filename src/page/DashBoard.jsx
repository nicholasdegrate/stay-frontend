import React from 'react';
import { useHistory } from 'react-router-dom';

// utils
import { logout } from '../utils/detect-auth';

export default function DashBoard() {
	const history = useHistory();

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
