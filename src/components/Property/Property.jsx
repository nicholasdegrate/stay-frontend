import React from 'react';
import { Flex, Heading, Text, Button, Box, Grid, Image } from '@chakra-ui/react';

// image
import apartment from '../../image/home.jpg';

export function Property({ property: { id, attributes: { address, rate, bedrooms, bathrooms } } }) {
	const rating = parseInt(rate) * 100 / 100;

	return (
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
				<Box h="150px" w="180px" padding="1em">
					<Image borderRadius="10px" h="120px" src={apartment} />
				</Box>
				<Grid>
					<Grid padding=".5em" gridTemplateRows="1fr 40%">
						<Box>
							<Flex justifyContent="space-between" alignItems="center">
								<Flex alignItems="center">
									<Heading as="h3" fontSize="1.2em">
										{address}
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
									<Button>Edit</Button>
								</Box>
							</Flex>
							<Box>
								<Text>{address}</Text>
							</Box>
						</Box>
						<Box>
							<Grid w="80%" gridTemplateColumns="1fr 1fr 1fr">
								<Box>
									<Text>Door</Text>
									<Text>Locked</Text>
								</Box>
								<Box>
									<Text>Avg.energy usage</Text>
									<Text>592kWh</Text>
								</Box>
								<Box>
									<Text>Noise level</Text>
									<Text>59 dB</Text>
								</Box>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
