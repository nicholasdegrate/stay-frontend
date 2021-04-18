import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// page
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import DashBoard from './page/DashBoard';

// components
import { NavBar } from './components/includes/NavBar';
// helpers
import { PrivateRoute } from './helpers/PrivateRoute';
import { PublicRoute } from './helpers/PublicRoute';

export default function App() {
	return (
		<ChakraProvider resetCSS={true}>
			<Router>
				<NavBar />
				<Switch>
					{/* Public */}
					<PublicRoute restricted={false} component={Home} path="/" exact />
					<PublicRoute restricted={true} component={Login} path="/login" exact />
					<PublicRoute restricted={true} component={SignUp} path="/signup" exact />

					{/* Private Route */}
					<PrivateRoute component={DashBoard} path="/dashboard" exact />
				</Switch>
			</Router>
		</ChakraProvider>
	);
}
