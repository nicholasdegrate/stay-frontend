import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/signup">Sign Up</NavLink>
		</div>
	);
}
