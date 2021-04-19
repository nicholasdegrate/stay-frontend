import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { Property } from './Property';

// redux
import { getFetchProperties } from '../../redux/actions/property';

export function Properties() {
	const dispatch = useDispatch();
	const { currentHost: { currentUser }, property: { properties } } = useSelector((state) => state);

	useEffect(
		() => {
			dispatch(getFetchProperties(currentUser.id));
		},
		[ dispatch, currentUser.id ]
	);

	const allProperties = properties.map((property) => <Property key={property.id} property={property} />);

	return <Fragment>{allProperties}</Fragment>;
}
