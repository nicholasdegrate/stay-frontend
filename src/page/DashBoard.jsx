import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Grid, Image, Heading, WrapItem, Flex, Button } from '@chakra-ui/react';
// utils
import { logout } from '../utils/detect-auth';

// image
import logoutBtn from '../image/logout.svg';

export default function DashBoard() {
	const history = useHistory();
	const { currentUser } = useSelector((state) => state.currentHost);

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	if (currentUser === null) return <Redirect to="/dashboard" />;

	return (
		<Grid gridTemplateColumns="20% 80%">
			<Grid padding="2em" gridTemplateRows="10% 70% 20% " h="100vh" bg="#ffffff">
				<Box>
					<Heading as="h2" fontSize="1.5em" display="inline-block">
						oyo-stay
					</Heading>
				</Box>
				<Box>
					<Flex flexDirection="column">
						<WrapItem className="dashboard-link-host">Dashboard</WrapItem>
						<WrapItem className="dashboard-link-host">Listings</WrapItem>
						<WrapItem className="dashboard-link-host">Providers</WrapItem>
						<WrapItem className="dashboard-link-host">User</WrapItem>
						<WrapItem className="dashboard-link-host">Billing</WrapItem>
						<WrapItem className="dashboard-link-host">Setting</WrapItem>
					</Flex>
				</Box>
				<button onClick={handleLogout}>
					<Image w="30px" src={logoutBtn} />
				</button>
			</Grid>
			<Box bg="#F6F8FC">
				<Grid alignItems="center" padding="2em" gridTemplateColumns="80% 20%" h="100px" w="100%" bg="red">
					<Box>search</Box>
					<Flex justifyContent="space-evenly" alignItems="center">
						<Button>Create Listing</Button>
						thi
						<Box bg="green" h="40px" w="40px" borderRadius="50px" />
					</Flex>
				</Grid>
				<Box />
			</Box>
		</Grid>
	);
}
