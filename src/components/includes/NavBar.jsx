import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Box,
	Flex,
	Heading,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure
} from '@chakra-ui/react';

// component
import { LoginForm } from './LoginForm';

export function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
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
					{/* <NavLink className="nav-link" to="/properties">
						Properties
					</NavLink> */}
				</Box>
				<Box alignSelf="flex-end">
					<NavLink display="none !important" ref={btnRef} onClick={onOpen} className="nav-link" to="/" />
					<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
						<DrawerOverlay>
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader>Login</DrawerHeader>

								<DrawerBody>
									<LoginForm />
								</DrawerBody>

								<DrawerFooter>
									<Button variant="outline" mr={3} onClick={onClose}>
										Cancel
									</Button>
								</DrawerFooter>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
					{/* <NavLink className="nav-link" to="/signup">
						Sign In
					</NavLink> */}
					<Button
						ref={btnRef}
						onClick={onOpen}
						mt="-.2em"
						bg="none"
						color="#DD6B20"
						_hover={{ backgroundColor: 'none' }}
					>
						<NavLink className="nav-link get-started" to="/">
							Login
						</NavLink>
					</Button>
					{/* <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
						<DrawerOverlay>
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader>Login</DrawerHeader>

								<DrawerBody>
									<LoginForm />
								</DrawerBody>

								<DrawerFooter>
									<Button variant="outline" mr={3} onClick={onClose}>
										Cancel
									</Button>
								</DrawerFooter>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer> */}
				</Box>
			</Flex>
		</Fragment>
	);
}
