import React from 'react';
import '../lib/Sass/_register.scss';
import { Link } from 'react-router-dom';
const Register = () => {
	return (
		<section id="register-section">
			<div className="register-container">
				<div className="card register-card">
					<div className="card-body">
						<legend className="lable">Username</legend>
						<input className="username form-control" type="text" />
						<legend className="lable">Password</legend>
						<input className="password form-control" type="password" />
						<Link to="/login">
							<button className="register-btn btn btn-primary" type="submit">
								Register
							</button>
						</Link>
						<h4 className="reg-link">
							{' '}
							Have account? Please
							<Link to="/login">
								<a href="#"> Login</a>
							</Link>
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
