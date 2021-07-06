import React,{ useState, useEffect } from 'react';
import Blog from './Blog';
const Home = () => {
	const [ articles, setArticles ] = useState([]);
	useEffect(() => {
		fetch('http://127.0.0.1:8000/articales/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 3aba70816980dfea3e5026555d3892ecd1dafa55'
			}
		})
			.then((response) => response.json())
			.then((response) => setArticles(response))
			.catch((error) => console.log(error))
	}, []);
	return (
		<div>
			<h1>This is Home Page</h1>
            {articles.map(article=>{
                <Blog articales={article} />
            })}
		</div>
	);
};

export default Home;
