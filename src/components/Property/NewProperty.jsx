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
					address_name: '',
					address_description: '',
					guest: '',
					location: '',
					price: '',
					bedrooms: '',
					bathrooms: '',
					door: 'locked',
					energy: '',
					noise: '',
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
								<FormLabel>Full Address</FormLabel>
								<Field
									as={Input}
									type="text"
									name="address_name"
									onChange={handleChange}
									placeholder="address"
									values={values.address_name}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Address Title</FormLabel>
								<Field
									as={Input}
									type="text"
									name="address_description"
									onChange={handleChange}
									placeholder="address"
									values={values.address_description}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Price</FormLabel>
								<Field
									as={Input}
									type="text"
									name="price"
									onChange={handleChange}
									placeholder="price"
									values={values.price}
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
								<FormLabel>Guest</FormLabel>
								<Field
									as={Input}
									type="text"
									name="guest"
									onChange={handleChange}
									placeholder="guest"
									values={values.guest}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Energy Power</FormLabel>
								<Field
									as={Input}
									type="text"
									name="energy"
									onChange={handleChange}
									placeholder="energy"
									values={values.energy}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Noise Level</FormLabel>
								<Field
									as={Input}
									type="text"
									name="noise"
									onChange={handleChange}
									placeholder="noise"
									values={values.noise}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Bedrooms</FormLabel>
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
								<FormLabel>Bathrooms</FormLabel>
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
