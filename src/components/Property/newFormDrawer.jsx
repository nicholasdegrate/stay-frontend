import React, { useRef, Fragment, useEffect } from 'react';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Stack,
	useDisclosure
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

// component
import { NewProperty } from './NewProperty';
// redux
import { HANDLE_DRAWER } from '../../redux/actions/types';

export const NewFormDrawer = () => {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const firstField = useRef();

	useEffect(
		() => {
			dispatch({ type: HANDLE_DRAWER, payload: onOpen });
		},
		[ dispatch, onOpen ]
	);

	return (
		<Fragment>
			<Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader borderBottomWidth="1px">Create a new property</DrawerHeader>

						<DrawerBody>
							<Stack spacing="24px">
								<NewProperty />
							</Stack>
						</DrawerBody>

						<DrawerFooter borderTopWidth="1px">
							<Button variant="outline" mr={3} onClick={onClose}>
								Cancel
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Fragment>
	);
};
