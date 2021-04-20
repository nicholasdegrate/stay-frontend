import React, { Fragment, useEffect } from 'react';
import { Box, Flex, Grid, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { SHOW_PROPERTY } from '../../redux/actions/types';

// images
import apartment from '../../image/home.jpg';

export function PropertyShow() {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const { property: { showProperty } } = useSelector((state) => state);

	const { id } = useParams();

	console.log(id);

	useEffect(
		() => {
			fetch(`http://localhost:3000/api/v1/properties/${id}`)
				.then((r) => r.json())
				.then((data) => dispatch({ type: SHOW_PROPERTY, payload: data }));
		},
		[ dispatch, id ]
	);

	useEffect(
		() => {
			if (location.pathname === `/properties/${id}`) return (document.body.style.overflowY = 'auto');
		},
		[ location.pathname, id ]
	);

	const handleBackButton = () => history.goBack();

	return (
		<Fragment>
			<Box padding="2em">
				<Box cursor="pointer" mb="1em" onClick={handleBackButton}>
					go back
				</Box>
				<Heading as="h3">{showProperty.data.attributes.address}</Heading>
				<Flex mt="1em" justifyContent="space-between" alignItems="center">
					<Box>
						<Text> 4.3 (47 reviews) - Broken Bow, Oklahoma, United States</Text>
					</Box>
					<Box>Save</Box>
				</Flex>
				<Grid gap="3" mt="2em" w="100%" h="500px" gridTemplateColumns="1fr 1fr">
					<Box>
						<Box borderTopLeftRadius="50px" borderBottomLeftRadius="50px" bg="red" w="100%" h="100%">
							<Image borderTopLeftRadius="50px" borderBottomLeftRadius="50px" h="512px" src={apartment} />
						</Box>
					</Box>
					<Grid gap="3" gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr 1fr">
						<Box bg="blue" w="100%" h="100%">
							<Image h="250px" src={apartment} />
						</Box>
						<Box borderTopRightRadius="50px" bg="green" w="100%" h="100%">
							<Image borderTopRightRadius="50px" h="250px" src={apartment} />
						</Box>
						<Box bg="orange" w="100%" h="100%">
							<Image h="250px" src={apartment} />
						</Box>
						<Box borderBottomRightRadius="50px" bg="yellow" w="100%" h="100%">
							<Image borderBottomRightRadius="50px" h="250px" src={apartment} />
						</Box>
					</Grid>
				</Grid>
				<Grid mt="2em" padding="1em" gridTemplateColumns="1fr 1fr">
					<Box>
						<Heading>Entire cabin hosted by Suzy</Heading>
						<Text mt="1em" mb="1em">
							6 guests · 2 bedrooms · 1 bath
						</Text>
						<hr />
						<Box>
							<Wrap display="flex" flexDirection="column" mb="2em" mt="1em">
								<Box w="100%">
									<Heading fontSize="1em">Entire home</Heading>
									<Text>You’ll have the cabin to yourself.</Text>
								</Box>
								<Box>
									<Heading fontSize="1em">Self check-in Check yourself in with the keypad </Heading>
									<Text>Check yourself in with the keypad</Text>
								</Box>
								<Box>
									<Heading fontSize="1em">Clean and tidy</Heading>
									<Text>8 recent guests said this place was sparkling clean</Text>
								</Box>
								<Box>
									<Heading fontSize="1em">Cancellation policy</Heading>
									<Text>Add your trip dates to get the cancellation details for this stay.</Text>
								</Box>
								<Box>
									<Heading fontSize="1em">House rules</Heading>
									<Text>The host doesn’t allow pets, parties, or smoking. Get details</Text>
								</Box>
							</Wrap>
						</Box>
					</Box>
					<Box mt="3em" padding="3em">
						<Box
							borderRadius="40px"
							boxShadow="md"
							p="6"
							rounded="md"
							h="300px"
							border="1px solid #e0e0e0"
						/>
					</Box>
				</Grid>
			</Box>
		</Fragment>
	);
}
