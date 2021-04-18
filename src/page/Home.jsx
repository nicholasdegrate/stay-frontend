import React, { Fragment } from 'react';
import { Box, Grid, Heading, Text, Button, Image } from '@chakra-ui/react';

// images
import apartment from '../image/home.jpg';

export default function Home() {
	const whitespace = [ ...Array(80).keys() ].map((i) => <Box h="5px" w="5px" bg="gray.300" borderRadius="10px" />);

	const whitespaceOne = [ ...Array(100).keys() ].map((i) => <Box h="5px" w="5px" bg="#e7bfa4" borderRadius="10px" />);
	return (
		<Fragment>
			<Box position="absolute" bg="#FFF8F8" zIndex={-1} h="80%" w="50%" top="-1em" />
			<Grid h="calc(100vh - 90px)" overflow="hidden" gridTemplateColumns="1fr 1fr">
				<Box display="flex" alignItems="center">
					<Box className="home-image" display="flex" alignItems="center">
						<Box
							display="grid"
							gridTemplateColumns="repeat(10, 1fr)"
							gridTemplateRows="repeat(10, 1fr)"
							position="absolute"
							right="-10%"
							w="130px"
							h="200px"
							top="0"
							zIndex="-1"
						>
							{whitespaceOne}
						</Box>
						<Image src={apartment} width="400px" />
					</Box>
				</Box>
				<Box display="flex" alignItems="center" position="relative">
					<Box
						position="absolute"
						bg="#E3F1F2"
						height="50px"
						w="150px"
						top="0"
						right="0"
						borderLeftRadius="100px"
					/>
					<Box
						position="absolute"
						height="100px"
						w="400px"
						bottom="-4"
						right="0"
						display="grid"
						gridTemplateColumns="repeat(20, 1fr)"
						gridTemplateRows="repeat(4, 1fr)"
						borderLeftRadius="100px"
					>
						{whitespace}
					</Box>
					<Box m="2">
						<Heading mt="-4em" fontWeight="800" fontSize="4em">
							Book a Trip<br />Host Travelers
						</Heading>
						<Text margin="1em 0">Find places to stay and things to do</Text>
						<Box>
							<Button color="#fff" bg="#DD6B20" borderRadius="50px" w="130px" margin="1em 1em 1em 0">
								Explore
							</Button>
							<Button
								bg="none"
								border="1px solid #DD6B20 !important"
								borderRadius="50px"
								w="130px"
								_hover={{ backgroundColor: '#F7FAFC' }}
							>
								Host
							</Button>
						</Box>
					</Box>
				</Box>
			</Grid>
		</Fragment>
	);
}
