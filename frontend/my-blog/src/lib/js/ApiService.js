export default class ApiService{
    static FetchData(){
        return fetch('http://127.0.0.1:8000/articales/', {
			'method': 'GET',
			//method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 2ccce7d6e9cc7761d0155e0bf811280fe75780ac',
			}
		}).then(response =>response.json())
    }
    static AddArticle(body){
        //console.log(article_id, body)
        return fetch(`http://127.0.0.1:8000/articales/`,{
            'method':'POST',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 2ccce7d6e9cc7761d0155e0bf811280fe75780ac',
			},
            body:JSON.stringify(body)
        }).then(response =>response.json())
    }
    static UpdateArticle(article_id, body){
        //console.log(article_id, body)
        return fetch(`http://127.0.0.1:8000/articales/${article_id}/`,{
            'method':'PUT',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 2ccce7d6e9cc7761d0155e0bf811280fe75780ac',
			},
            body:JSON.stringify(body)
        }).then(response =>response.json())
    }
    static DeleteArticle(article_id){
        //console.log(article_id, body)
        return fetch(`http://127.0.0.1:8000/articales/${article_id}/`,{
            'method':'DELETE',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 2ccce7d6e9cc7761d0155e0bf811280fe75780ac',
			},
        })
    }
    static LogIn(body){
        return fetch('http://127.0.0.1:8000/auth/', {
			'method': 'POST',
			//method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
            body:JSON.stringify(body)
		}).then(response =>response.json())
    }
}