import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';

// components
import { NavBar } from './components/includes/NavBar';

export default function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</Router>
	);
}
