import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Box, Grid, Image, Heading, WrapItem, Flex } from '@chakra-ui/react';
// utils
import { logout } from '../../utils/detect-auth';
// image
import logoutBtn from '../../image/logout.svg';

export function DashBoardSideBar() {
	const history = useHistory();
	const location = useLocation();

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	useEffect(
		() => {
			const body = document.body;

			if (location.pathname === '/dashboard') return (body.style.overflow = 'hidden ');

			return () => {
				if (location.pathname !== '/dashboard') return body.style.removeProperty;
			};
		},
		[ location ]
	);

	return (
		<Grid padding="2em" gridTemplateRows="10% 70% 20% " h="100vh" bg="#ffffff">
			<Box>
				<Heading as="h2" fontSize="1.5em" display="inline-block">
					oyo-stay
				</Heading>
			</Box>
			<Box>
				<Flex flexDirection="column">
					<WrapItem className="dashboard-link-host">
						<Link to="/dashboard">Dashboard</Link>
					</WrapItem>
					<WrapItem className="dashboard-link-host">Listings</WrapItem>
					<WrapItem className="dashboard-link-host">Providers</WrapItem>
					<WrapItem className="dashboard-link-host">User</WrapItem>
					<WrapItem className="dashboard-link-host">Billing</WrapItem>
					<WrapItem className="dashboard-link-host">
						<Link to="/dashboard/settings">Settings</Link>
					</WrapItem>
				</Flex>
			</Box>
			<Box cursor="pointer" onClick={handleLogout}>
				<Image w="30px" src={logoutBtn} />
			</Box>
		</Grid>
	);
}
