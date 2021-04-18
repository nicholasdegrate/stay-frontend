import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// component
import { isLogin } from '../utils/detect-auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />;
};
