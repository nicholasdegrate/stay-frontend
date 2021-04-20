import React, { Fragment, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Stack, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

// redux
import { postFetchProperties } from '../../redux/actions/property';

export function NewProperty() {
	const { currentUser } = useSelector((state) => state.currentHost);
	const dispatch = useDispatch();

	const unMounted = useCallback(
		(values, setSubmitting) => {
			dispatch(postFetchProperties(values, setSubmitting));
		},
		[ dispatch ]
	);

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
					setTimeout(() => {
						unMounted(values, setSubmitting);
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
