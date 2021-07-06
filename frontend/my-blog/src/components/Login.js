import React from 'react';
import '../lib/Sass/_login.scss';
import { Link } from 'react-router-dom';
export default function Login() {
	return (
		<section id="login-section">
			<div className="login-container">
				<div className="card login-card">
					<div className="card-body">
						<legend className="lable">Username</legend>
						<input className="username form-control" type="text" />
						<legend className="lable">Password</legend>
						<input className="password form-control" type="password" />
						<Link to="/">
							<button className="login-btn btn btn-primary" type="submit">
								Login
							</button>
						</Link>
						<h4 className="reg-link">
							{' '}
							Haven't any account? Please
							<Link to="/register">
								<a href="#"> Register</a>
							</Link>
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
