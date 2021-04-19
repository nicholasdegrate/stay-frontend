import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	Box,
	Grid,
	Image,
	Heading,
	WrapItem,
	Flex,
	Button,
	Input,
	ButtonGroup,
	IconButton,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
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
				<Box cursor="pointer" onClick={handleLogout}>
					<Image w="30px" src={logoutBtn} />
				</Box>
			</Grid>
			<Box bg="#F6F8FC">
				<Grid alignItems="center" padding="2em" gridTemplateColumns="75% 25%" h="100px" w="100%">
					<Box>
						<InputGroup>
							<InputLeftElement pointerEvents="none" children={<SearchIcon />} />
							<Input maxWidth="60%" type="text" placeholder="Search property, user, provider etc" />
						</InputGroup>
					</Box>
					<Flex justifyContent="space-evenly" alignItems="center">
						<ButtonGroup size="sm" isAttached variant="outline">
							<Button borderRadius="10px">Create Listing</Button>
							<IconButton aria-label="Add to friends" icon={<AddIcon />} />
						</ButtonGroup>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							ml="1em"
							bg="#Fff"
							h="40px"
							w="40px"
							borderRadius="50px"
							border="2px solid #ccc6c6"
						>
							<Box w="95%" h="95%" bg="#ccc6c6" border="1px solid #fff" borderRadius="50px" />
						</Box>
					</Flex>
				</Grid>
				{/* dashboard  main */}
				<Grid padding="2em">
					<Grid padding="0 .5em" alignItems="center" gridTemplateColumns="70% 30%">
						<Heading as="h2">Listings</Heading>
						<Box justifySelf="end">
							<ButtonGroup size="sm" isAttached variant="outline">
								<Button>Active</Button>
								<Button>Inative</Button>
							</ButtonGroup>
						</Box>
					</Grid>
					<Box padding="3em .5em">
						<Box w="100%" h="150px" bg="#505050" borderRadius="15px">
							<Grid>
								<Image />
								<Grid>hello</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Box>
		</Grid>
	);
}
