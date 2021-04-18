import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { FormControl, Input, Box, Button } from '@chakra-ui/react';

// utils
import { login } from '../../utils/detect-auth';

export function LoginForm() {
	const history = useHistory();

	return (
		<Fragment>
			<h1>login</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						fetch('http://localhost:3000/api/v1/login', {
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
								login(data.token);

								history.push('/dashboard');
							})
							.catch((err) => console.log(err));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Box w="400px">
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
						</Box>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
