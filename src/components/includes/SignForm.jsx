import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

export function SignForm() {
	const history = useHistory();

	return (
		<Fragment>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{ name: '', email: '', phone: '', location: '', age: '', host_since: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						fetch('http://localhost:3000/api/v1/hosts', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(values)
						})
							.then((r) => r.json())
							.then((data) => {
								setSubmitting(true);
								history.push('/');
							});
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Field type="email" name="email" onChange={handleChange} placeholder="email" />
						<Field type="text" name="name" onChange={handleChange} placeholder="name" />
						<Field type="text" name="phone" onChange={handleChange} placeholder="phone" />
						<Field type="text" name="location" onChange={handleChange} placeholder="location" />
						<Field type="number" name="age" onChange={handleChange} placeholder="age" />
						<Field type="hidden" name="host_since" onChange={handleChange} placeholder="host since" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
