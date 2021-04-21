import React, { Fragment } from 'react';
import {
	Flex,
	Heading,
	Text,
	Button,
	Box,
	Grid,
	Image,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// redux
import { DELETE_PROPERTY } from '../../redux/actions/types';
// components
import { UpdateProperty } from './UpdateProperty';

// image
import apartment from '../../image/home.jpg';

export function Property({
	property: {
		id,
		attributes: {
			'address-description': addressDescription,
			'address-name': addressName,
			bathrooms,
			bedrooms,
			door,
			energy,
			guest,
			location,
			noise,
			price,
			rate
		}
	}
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();
	const btnRef = React.useRef();
	const rating = parseFloat((rate * 2 * 10).toFixed(2));

	const handleDelete = () => {
		fetch(`http://localhost:3000/api/v1/properties/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch({ type: DELETE_PROPERTY, payload: id });
			});
	};

	return (
		<Fragment>
			<Box
				m="1em 0"
				w="100%"
				h="150px"
				bg="#fff"
				borderRadius="15px"
				_hover={{ bg: '#ebedf0' }}
				_active={{
					bg: '#dddfe2',
					transform: 'scale(1.01)'
				}}
			>
				<Grid gridTemplateColumns="200px 1fr">
					<Link to={`/properties/${id}`}>
						<Box h="150px" w="180px" padding="1em">
							<Image borderRadius="10px" h="120px" src={apartment} />
						</Box>
					</Link>
					<Grid>
						<Grid padding=".5em" gridTemplateRows="1fr 40%">
							<Box>
								<Flex justifyContent="space-between" alignItems="center">
									<Flex alignItems="center">
										<Heading as="h3" fontSize="1.2em">
											{addressName}
										</Heading>
										<span className="score">
											<div className="score-wrap">
												<span className="stars-active" style={{ width: `${rating}%` }}>
													<i className="fa fa-star" aria-hidden="true" />
													<i className="fa fa-star" aria-hidden="true" />
													<i className="fa fa-star" aria-hidden="true" />
													<i className="fa fa-star" aria-hidden="true" />
													<i className="fa fa-star" aria-hidden="true" />
												</span>
												<span className="stars-inactive">
													<i className="fa fa-star-o" aria-hidden="true" />
													<i className="fa fa-star-o" aria-hidden="true" />
													<i className="fa fa-star-o" aria-hidden="true" />
													<i className="fa fa-star-o" aria-hidden="true" />
													<i className="fa fa-star-o" aria-hidden="true" />
												</span>
											</div>
										</span>
									</Flex>
									<Box>
										<Button mr="1em" bg="gray.200" color="#fff" onClick={handleDelete}>
											Delete
										</Button>
										<Button bg="gray.400" ref={btnRef} onClick={onOpen}>
											Edit
										</Button>
										<Drawer
											isOpen={isOpen}
											placement="right"
											onClose={onClose}
											finalFocusRef={btnRef}
										>
											<DrawerOverlay>
												<DrawerContent>
													<DrawerCloseButton />
													<DrawerHeader>Create your account</DrawerHeader>

													<DrawerBody>
														<UpdateProperty
															addressDescription={addressDescription}
															addressName={addressName}
															bathrooms={bathrooms}
															bedrooms={bedrooms}
															door={door}
															guest={guest}
															price={price}
															rating={rating}
															id={id}
														/>
													</DrawerBody>

													<DrawerFooter>
														<Button variant="outline" mr={3} onClick={onClose}>
															Cancel
														</Button>
														<Button colorScheme="blue">Save</Button>
													</DrawerFooter>
												</DrawerContent>
											</DrawerOverlay>
										</Drawer>
									</Box>
								</Flex>
								<Box>
									<Text>{addressDescription}</Text>
								</Box>
							</Box>
							<Box>
								<Grid w="80%" gridTemplateColumns="1fr 1fr 1fr">
									<Box>
										<Text>Door</Text>
										<Text>{door}</Text>
									</Box>
									<Box>
										<Text>Avg.energy usage</Text>
										<Text>{energy}kWh</Text>
									</Box>
									<Box>
										<Text>Noise level</Text>
										<Text>{noise} dB</Text>
									</Box>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Fragment>
	);
}
