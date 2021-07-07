import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';
import Form from './Form';
const Home = () => {
	const [articles, setArticles] = useState([]);
	const [formData, setFormData] = useState([]);
	const [upAdd, setUpAdd] = useState('update');
	const [formField, setformField] = useState(false);
	useEffect(() => {
		fetch('http://127.0.0.1:8000/articales/', {
			'method': 'GET',
			//method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 2ccce7d6e9cc7761d0155e0bf811280fe75780ac',
			}
		})
			.then((response) => response.json())
			.then((response) => setArticles(response))
			.catch((error) => console.log(error))
	}, [])
	//console.log(articles)
	const updateClick = (article,upadd) => {
		//console.log(article)
		setFormData(article)
		upAddClick1(upadd)
	}
	const upAddClick = (prop) => {
		if (prop === 'update')
			setUpAdd('update')
		else setUpAdd('add')
		if(formField) setformField(false)
		else setformField(true)
		//return
	}
	const upAddClick1 = (prop) => {
		if (prop === 'update')
			setUpAdd('update')
		else setUpAdd('add')
		setformField(true)
		//return
	}
	return (
		<div>
			{/* <h1>This is Home Page</h1> */}
			<div className="container">
				<div className="card">
					<div className="card-body">
						<Link to="/login">
				<a href="#">Login</a>
			</Link>
			<button class="btn btn-success" style={{marginLeft:"5%"}} 
			type="submit" onClick={()=>{upAddClick1('add')}}>Add New Article</button>
					</div>
				</div>
			</div>
			{articles.map(article => {
				return(
					<div key = {article.id}>
						<Blog articales={article} updateClick={()=>{updateClick(article,'update')}}/>
					</div>
				)
			})}
			{(formField)?<Form formData={formData} upadd={upAdd} upAddClick={()=>{upAddClick(upAdd)}}/>: null
			}
			{/* <Blog /> */}
			
		</div>
	);
};

export default Home;
