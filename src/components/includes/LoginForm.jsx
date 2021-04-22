import React, { Fragment, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { FormControl, Input, Box, Button, Stack, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
// redux
import { hostPostFetch } from '../../redux/actions/hostPostFetch';

export function LoginForm() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleWillunMount = useCallback(
		(values, setSubmitting, history) => {
			dispatch(hostPostFetch(values, setSubmitting, history));
		},
		[ dispatch ]
	);

	return (
		<Fragment>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						handleWillunMount(values, setSubmitting, history);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Stack spacing="24px">
							<FormControl>
								<Field
									as={Input}
									type="email"
									name="email"
									onChange={handleChange}
									placeholder="email"
								/>
							</FormControl>
							<FormControl>
								<Field
									as={Input}
									type="password"
									name="password"
									onChange={handleChange}
									placeholder="password"
								/>
							</FormControl>
							<Button type="submit" disabled={isSubmitting}>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
