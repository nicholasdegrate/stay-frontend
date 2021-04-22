import React, { Fragment, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Stack, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

// redux
import { patchFetchProperties } from '../../redux/actions/property';

export function UpdateProperty({
	id,
	property_type,
	bedrooms,
	bathrooms,
	location,
	door,
	guest,
	price,
	rate,
	energy,
	noise,
	addressDescription,
	addressName
}) {
	const { currentUser } = useSelector((state) => state.currentHost);
	const dispatch = useDispatch();

	const unMounted = useCallback(
		(values, setSubmitting) => {
			dispatch(patchFetchProperties(values, setSubmitting, id));
		},
		[ dispatch, id ]
	);

	return (
		<Fragment>
			<Formik
				initialValues={{
					property_type: property_type,
					rate: rate,
					address_name: addressName,
					address_description: addressDescription,
					guest: guest,
					location: location,
					price: price,
					bedrooms: bedrooms,
					bathrooms: bathrooms,
					door: door,
					energy: energy,
					noise: noise,
					host_id: currentUser.id
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);
						unMounted(values, setSubmitting);
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange, values }) => (
					<Form>
						<Stack spacing="24px">
							<FormControl>
								<FormLabel>Address Description</FormLabel>
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
