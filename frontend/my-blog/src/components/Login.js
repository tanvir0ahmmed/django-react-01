import React,{useState, useEffect, createContext, useContext} from 'react';
import '../lib/Sass/_login.scss';
import { Link } from 'react-router-dom';
import ApiService from '../lib/js/ApiService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
export default function Login() {
	const [username,setUsername] = useState()
	const [password,setPassword] = useState()
	//const [token,setToken] = useCookies(['mytoken'])
	const [token,setToken] = useCookies(['mytoken'])
	//const [logData,setLogData] = useState({})
	let history = useHistory()
	//const InfoContext = createContext(logData);
	useEffect(() => {
		if(token['mytoken']){
			history.push({
				pathname:'/home',
				//mydata:logData
			})
		}
	},[token, history])

	const logInBtn = () => {
		ApiService.LogIn({username,password})
		.then(response => LogData(response))
		.catch(error =>console.log(error))
	}

	const LogData = (response) => {
		//setLogData(response)
		setToken('mytoken',response.token)
		//console.log('response',response)
	}
	return (
		<section id="login-section">
			<div className="login-container">
				<div className="card login-card">
					<div className="card-body">
						<legend className="lable">Username</legend>
						<input className="username form-control"
						 type="text" 
						 onChange={(e)=>setUsername(e.target.value)}
						 value={username}
						 />
						<legend className="lable">Password</legend>
						<input className="password form-control"
						 type="password"
						 onChange={(e)=>setPassword(e.target.value)}
						 value={password}
						 />
							<button className="login-btn btn btn-primary" type="submit" onClick={()=>{logInBtn()}}>
								Login
							</button>
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
