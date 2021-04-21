import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
// page
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import DashBoard from './page/DashBoard';

// components
import { NavBar } from './components/includes/NavBar';
import { PropertyShow } from './components/Property/PropertyShow';
import { Setting } from './components/Host/Setting';
// helpers
import { PrivateRoute } from './helpers/PrivateRoute';
import { PublicRoute } from './helpers/PublicRoute';

// redux
import { CURRENT_HOST } from './redux/actions/types';

// utils
import { isLogin } from './utils/detect-auth';

export default function App() {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.currentHost);

	useEffect(
		() => {
			if (isLogin()) {
				// request => GET /me
				// send the token with the request
				fetch('http://localhost:3000/api/v1/currentuser', {
					headers: {
						Authorization: `Bearer ${isLogin()}`
					}
				})
					.then((r) => r.json())
					.then((data) => {
						dispatch({ type: CURRENT_HOST, payload: data });
					});
			}
		},
		[ dispatch ]
	);

	return (
		<ChakraProvider resetCSS={true}>
			<Router>
				{!currentUser && <NavBar />}
				<Switch>
					{/* Public */}
					<PublicRoute restricted={false} component={Home} path="/" exact />
					<PublicRoute restricted={true} component={Login} path="/login" exact />
					<PublicRoute restricted={true} component={SignUp} path="/signup" exact />
					<PublicRoute restricted={false} component={PropertyShow} path="/properties/:id" exact />

					{/* Private Route */}
					<PrivateRoute component={DashBoard} path="/dashboard" exact />
					<PrivateRoute component={Setting} path="/dashboard/settings" exact />
				</Switch>
			</Router>
		</ChakraProvider>
	);
}
