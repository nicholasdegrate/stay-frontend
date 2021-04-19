import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

// utils
import { login } from '../../utils/detect-auth';

export function SignForm() {
	const history = useHistory();

	return (
		<Fragment>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						fetch('http://localhost:3000/api/v1/signup', {
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
							});
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Field as={Input} type="text" name="name" onChange={handleChange} placeholder="name" />
						<Field type="email" name="email" onChange={handleChange} placeholder="email" />
						<Field type="password" name="password" onChange={handleChange} placeholder="password" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
