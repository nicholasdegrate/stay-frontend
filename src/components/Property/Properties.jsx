import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import { Property } from './Property';

// redux
import { getFetchProperties } from '../../redux/actions/property';
import { PAGE_COUNT, HANDLE_PAGE_CLICK } from '../../redux/actions/types';

const PER_PAGE = 4;

export function Properties() {
	const [ currentPage, setCurrentPage ] = useState(0);
	const dispatch = useDispatch();
	const { currentHost: { currentUser }, property: { properties } } = useSelector((state) => state);

	useEffect(
		() => {
			dispatch(getFetchProperties(currentUser.id));
		},
		[ dispatch, currentUser.id ]
	);

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	const offset = currentPage * PER_PAGE;

	const currentPageData = properties
		.slice(offset, offset + PER_PAGE)
		.map((property) => <Property key={property.id} property={property} />);

	const pageCount = Math.ceil(properties.length / PER_PAGE);

	useEffect(
		() => {
			dispatch({ type: PAGE_COUNT, payload: pageCount });
			dispatch({ type: HANDLE_PAGE_CLICK, payload: handlePageClick });
		},
		[ dispatch, pageCount ]
	);

	return <Fragment>{currentPageData}</Fragment>;
}
