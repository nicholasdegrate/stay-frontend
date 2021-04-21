import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Grid, Button, Input, Stack, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

// components
import { DashBoardSideBar } from './DashBoardSideBar';

// utils
import { isLogin } from '../../utils/detect-auth';
export function Setting() {
	const { currentUser: { name, email, age, location, phone } } = useSelector((state) => state.currentHost);

	return (
		<Grid gridTemplateColumns="20% 80%">
			<DashBoardSideBar />
			<Box padding="4em 10em" bg="#F6F8FC">
				<Flex justifyContent="left" alignItems="center">
					<Flex
						borderRadius="50px"
						justifyContent="center"
						alignItems="center"
						bg="#F6AD55"
						h="70px"
						w="70px"
					>
						{name.split('')[0].charAt(0).toUpperCase()}
					</Flex>
					<Button color="#fff" bg="#718096" margin="0 1em">
						Upload new picture
					</Button>
					<Button>Delete</Button>
				</Flex>
				<Formik
					initialValues={{ name: name, email: email, age: age, location: location, phone: phone }}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							fetch('http://localhost:3000/api/v1/currentuser', {
								method: 'PATCH',
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${isLogin()}`
								},
								body: JSON.stringify(values)
							})
								.then((r) => {
									if (r.ok) {
										return r.json();
									} else {
										return r.json().then((data) => {
											throw data;
										});
									}
								})
								.then((data) => {
									console.log(data);
								});
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting, handleChange }) => (
						<Form>
							<Stack mt="2em" maxWidth="500px" spacing="24px">
								<Field as={Input} type="text" name="name" onChange={handleChange} placeholder="name" />
								<Field
									as={Input}
									type="email"
									name="email"
									onChange={handleChange}
									placeholder="email"
								/>

								<Field
									as={Input}
									type="phone"
									name="phone"
									onChange={handleChange}
									placeholder="phone"
								/>
								<Field
									as={Input}
									type="text"
									name="location"
									onChange={handleChange}
									placeholder="location"
								/>

								<Button
									color="#fff"
									bg="#DD6B20"
									maxWidth="200px"
									type="submit"
									disabled={isSubmitting}
								>
									Save Profile
								</Button>
							</Stack>
						</Form>
					)}
				</Formik>
			</Box>
		</Grid>
	);
}
