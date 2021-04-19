import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { Input, Stack, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

export function NewProperty() {
	const { currentUser } = useSelector((state) => state.currentHost);

	return (
		<Fragment>
			<Formik
				initialValues={{
					property_type: '',
					rate: '',
					address: '',
					bedrooms: '',
					bathrooms: '',
					host_id: currentUser.id
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					setTimeout(() => {
						fetch('http://localhost:3000/api/v1/properties', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
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
							})
							.catch(console.log);
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange, values }) => (
					<Form>
						<Stack spacing="24px">
							<FormControl>
								<FormLabel>Property Type</FormLabel>
								<Field
									as={Input}
									type="text"
									name="property_type"
									onChange={handleChange}
									placeholder="property type"
									values={values.property_type}
								/>
							</FormControl>
							<Box display="none">
								<Field
									as={Input}
									type="number"
									name="rate"
									onChange={handleChange}
									placeholder="email"
									values={(values.rate = 0)}
								/>
							</Box>
							<FormControl>
								<FormLabel>Address</FormLabel>
								<Field
									as={Input}
									type="text"
									name="address"
									onChange={handleChange}
									placeholder="Address"
									values={values.address}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Bedroom</FormLabel>
								<Field
									as={Input}
									type="number"
									name="bedrooms"
									onChange={handleChange}
									placeholder="bedroom"
									values={values.bedrooms}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Bathroom</FormLabel>
								<Field
									as={Input}
									type="number"
									name="bathrooms"
									onChange={handleChange}
									placeholder="bathroom"
									values={values.bathrooms}
								/>
							</FormControl>
							<Box display="none">
								<Field
									as={Input}
									type="number"
									name="host_id"
									onChange={handleChange}
									placeholder="email"
									values={values.host_id}
								/>
							</Box>
							<Button type="submit" color="#fff" bg="blue.600" disabled={isSubmitting}>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
