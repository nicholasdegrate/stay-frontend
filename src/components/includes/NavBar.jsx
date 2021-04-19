import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

export function NavBar() {
	return (
		<Fragment>
			<Flex id="navbar" alignItems="center" justifyContent="space-between" h="50px" m="1em">
				<Box>
					<Heading as="h2" fontSize="1.5em" display="inline-block">
						oyo-stay
					</Heading>
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
					<NavLink className="nav-link" to="/properties">
						Properties
					</NavLink>
				</Box>
				<Box alignSelf="flex-end">
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-link" to="/signup">
						Sign In
					</NavLink>
					<Button mt="-.2em" bg="none" color="#DD6B20" _hover={{ backgroundColor: 'none' }}>
						<NavLink className="nav-link get-started" to="/signup">
							Get Started
						</NavLink>
					</Button>
				</Box>
			</Flex>
		</Fragment>
	);
}
