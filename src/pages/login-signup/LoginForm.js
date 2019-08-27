import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import loginUser from './LoginForm.action';
import { useSelector, connect } from 'react-redux';
import { loginValidator } from './utils/loginValidator';
import Button from '../../components/Button';
import { Input, Label } from '../../components/Input';

function LoginForm(props) {
	const [errors, setErrors] = useState({});

	const { loading } = useSelector(({ auth }) => auth);

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const onChange = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: value });
		// remove the error display once a value is entered
		setErrors({ ...errors, [name]: '' });
	};

	const navigateUser = () => {
		props.history.push('/');
	};
	const onSubmit = event => {
		event.preventDefault();

		const errorFields = loginValidator(values);

		if (Object.keys(errorFields).length > 0) {
			setErrors(errorFields);
			return;
		}

		props.login(values, setErrors, navigateUser);
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-12 mb-30'>
					<Input
						name='email'
						value={values.email}
						type='text'
						placeholder='you@example.com'
						id='login-email'
						onChange={onChange}
					/>
					{errors.email ? (
						<Label useFor='validation_error' className='list-group-item-danger' htmlFor='login-email'>
							{errors.email}
						</Label>
					) : null}
				</div>
				<div className='col-12 mb-30'>
					<Input
						name='password'
						value={values.password}
						type='password'
						placeholder='Password'
						id='login-password'
						onChange={onChange}
					/>
					{errors.password ? (
						<Label useFor='validation_error' className='list-group-item-danger' htmlFor='login-password'>
							{errors.password}
						</Label>
					) : null}
				</div>
				<div className='col-12 mb-30'>
					<Button testId='login-button' textContent={loading ? 'Loading' : 'Login'} submit={true} />
				</div>

				<div className='col-12 d-flex justify-content-between'>
					<span>
						New User to Diaspora Invest?&nbsp;
						<a className='register-toggle' href='#signup-tab'>
							Sign Up!
						</a>
					</span>
					<span>
						<a href='forgot-password.html'>Forgot Password ?</a>
					</span>
				</div>
			</div>
		</form>
	);
}

const mapDispatchToProps = {
	login: loginUser,
};

export default connect(
	null,
	mapDispatchToProps
)(withRouter(LoginForm));