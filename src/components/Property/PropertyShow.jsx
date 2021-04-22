import React, { Fragment, useEffect } from 'react';
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Select, Text, Wrap } from '@chakra-ui/react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { SHOW_PROPERTY } from '../../redux/actions/types';

// images
import apartment from '../../image/home.jpg';
import backbtn from '../../image/logout.svg';

export function PropertyShow() {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const { property: { showProperty } } = useSelector((state) => state);

	const {
		data: {
			attributes: {
				'address-description': addressDescription,
				'address-name': addressName,
				bathrooms,
				bedrooms,
				guest,
				price,
				rate
			}
		},
		included
	} = showProperty;

	const { id } = useParams();

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
					<Image w="30px" src={backbtn} />
				</Box>
				<Heading as="h3">{addressDescription}</Heading>
				<Flex mt="1em" justifyContent="space-between" alignItems="center">
					<Box>
						<Text>
							{rate} (47 reviews) - {addressName}
						</Text>
					</Box>
					<Box>Save</Box>
				</Flex>
				<Grid gap="3" mt="2em" w="100%" h="500px" gridTemplateColumns="1fr 1fr">
					<Box>
						<Box borderTopLeftRadius="50px" borderBottomLeftRadius="50px" w="100%" h="100%">
							<Image borderTopLeftRadius="50px" borderBottomLeftRadius="50px" h="512px" src={apartment} />
						</Box>
					</Box>
					<Grid gap="3" gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr 1fr">
						<Box w="100%" h="100%">
							<Image h="250px" src={apartment} />
						</Box>
						<Box borderTopRightRadius="50px" w="100%" h="100%">
							<Image borderTopRightRadius="50px" h="250px" src={apartment} />
						</Box>
						<Box w="100%" h="100%">
							<Image h="250px" src={apartment} />
						</Box>
						<Box borderBottomRightRadius="50px" w="100%" h="100%">
							<Image borderBottomRightRadius="50px" h="250px" src={apartment} />
						</Box>
					</Grid>
				</Grid>
				<Grid mt="2em" padding="1em" gridTemplateColumns="1fr 1fr">
					<Box>
						<Heading>{addressName}</Heading>
						<Text mt="1em" mb="1em">
							{guest} guests · {bedrooms} bedrooms · {bathrooms} bath
						</Text>
						<hr />
						<Box>
							<Wrap display="flex" flexDirection="column" mb="2em" mt="1em">
								<Box w="100%">
									<Heading fontSize="1em">Entire home</Heading>
									<Text>You’ll have the cabin to yourself.</Text>
								</Box>
								<Box w="100%">
									<Heading fontSize="1em">Self check-in Check yourself in with the keypad </Heading>
									<Text>Check yourself in with the keypad</Text>
								</Box>
								<Box>
									<Heading fontSize="1em">Clean and tidy</Heading>
									<Text>8 recent guests said this place was sparkling clean</Text>
								</Box>
								<Box w="100%">
									<Heading fontSize="1em">Cancellation policy</Heading>
									<Text>Add your trip dates to get the cancellation details for this stay.</Text>
								</Box>
								<Box w="100%">
									<Heading fontSize="1em">House rules</Heading>
									<Text>The host doesn’t allow pets, parties, or smoking. Get details</Text>
								</Box>
							</Wrap>
						</Box>
					</Box>
					<Flex justifyContent="center" mt="3em" padding="3em">
						<Box borderRadius="40px" boxShadow="md" p="6" rounded="md" h="300px" border="1px solid #e0e0e0">
							<Flex justifyContent="space-between" alignItems="center">
								<Text>${price} / night</Text>
								<Text>{rate} (74 reviews)</Text>
							</Flex>
							<Box>
								<Grid>
									<Flex w="100%" mt="3em">
										<Input type="month" placeholder="" />
										<Input type="month" placeholder="" />
									</Flex>
									<Select placeholder="1 guest">
										<option value="guest1">2 guest</option>
										<option value="guest3">3 guest</option>
										<option value="guest4">4 guest</option>
									</Select>
								</Grid>
							</Box>
							<Box>
								<Button mt="2em" w="100%" color="#fff" bg="#F6AD55">
									Check availability
								</Button>
							</Box>
						</Box>
					</Flex>
				</Grid>
				<hr />
				<Grid
					mt="3em"
					h="800px"
					w="100%"
					gridTemplateRows="repeat(auto)"
					gridTemplateColumns="repeat(auto-fit, 50%)"
				>
					{included &&
						included.map((review) => (
							<GridItem key={review.id} h="200px">
								<Flex padding="1em" alignItems="center" flexDirection="column">
									<Flex w="100%" justifySelf="left" alignItems="center">
										<Image mr="1em" borderRadius="50px" h="50px" w="50px" src={apartment} />
										<Box>
											<Heading>{review.attributes.name}</Heading>
											<Text>April</Text>
										</Box>
									</Flex>
									<Text w="100%" mt="1em" fontSize=".9em">
										{review.attributes.comment}
									</Text>
								</Flex>
							</GridItem>
						))}
				</Grid>
			</Box>
		</Fragment>
	);
}
