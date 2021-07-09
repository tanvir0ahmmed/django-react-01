import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import Form from "./Form";
import ApiService from "../lib/js/ApiService";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState([]);
  //const [ userInfo, setUserInfo ] = useState([]);
  const [upAdd, setUpAdd] = useState("update");
  const [formField, setformField] = useState(false);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let history = useHistory();

  //const location = useLocation();
  //console.log('Home',props)
  //console.log('Home---',props.location.mydata)
  //let userData = props.location.mydata
  /* useEffect(() => {
		setUserInfo(userData)
	},[userInfo,userData]) */

  useEffect(() => {
    if (token["mytoken"]) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [history, token]);

  useEffect(() => {
    ApiService.FetchData(token["mytoken"])
      .then((response) => setArticles(response))
      .catch((error) => console.log(error));
  }, [formField]);

  //console.log(articles)
  const updateClick = (article, upadd) => {
    setFormData(article);
    upAddClick1(upadd);
  };

  const upAddClick = (prop) => {
    if (prop === "update") setUpAdd("update");
    else if (prop === "delete") setUpAdd("delete");
    else setUpAdd("add");
    if (formField) setformField(false);
    else setformField(true);
    //return
  };
  const upAddClick1 = (prop) => {
    if (prop === "update") setUpAdd("update");
    else setUpAdd("add");
    setformField(true);
    //return
  };
  const logOutBtn = () => {
    ApiService.LogOut(token["mytoken"])
      .then((response) => setToken("mytoken", ""))
      .catch((error) => console.log(error));
    removeToken(["mytoken"]);
  };
  return (
    <div>
      {/* <h1>This is Home Page</h1> */}
      <div className="container">
        <div className="card">
          <div className="card-body">
            <button
              class="btn btn-success"
              style={{ marginLeft: "5%" }}
              type="submit"
              onClick={() => {
                upAddClick1("add");
              }}
            >
              Add New Article
            </button>
            <button
              className="btn btn-danger"
              type="submit"
              onClick={() => logOutBtn()}
            >
              Log🐙Out
            </button>
          </div>
        </div>
      </div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Blog
              articales={article}
              upAddClick={() => {
                upAddClick("delete");
              }}
              updateClick={() => {
                updateClick(article, "update");
              }}
            />
          </div>
        );
      })}
      {formField ? (
        <Form
          formData={formData}
          upadd={upAdd}
          upAddClick={() => {
            upAddClick(upAdd);
          }}
        />
      ) : null}
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
