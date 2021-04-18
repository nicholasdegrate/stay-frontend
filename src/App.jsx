import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import DashBoard from './page/DashBoard';

// components
import { NavBar } from './components/includes/NavBar';
import { PrivateRoute } from './helpers/PrivateRoute';

export default function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				{/* Public */}
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />

				{/* Private Route */}
				<PrivateRoute component={DashBoard} path="/dashboard" exact />
			</Switch>
		</Router>
	);
}
