import React, { useState, useEffect } from "react";
import ApiService from "../lib/js/ApiService";
import { useCookies } from "react-cookie";
const Blog = (props) => {
  //console.log(props)
  const [token] = useCookies(["mytoken"]);
  const deleteArticle = () => {
    ApiService.DeleteArticle(props.articales.id, token["mytoken"]).catch(
      (err) => console.error(err)
    );
  };
  return (
    <section className="blog-section">
      {/* <label>{props.articales.title}</label>
            <p>{props.articales.description}</p> */}
      <div className="container blog-container">
        <div className="card m-5">
          <div className="card-header">
            This Blog created at 2021-07-07T03:50:22.905590Z{" "}
            {props.articales.created_at}
          </div>
          <div className="card-body">
            <h1 className="card-title">{props.articales.title}</h1>
            <p className="card-text">{props.articales.description}</p>
            <button
              type="button"
              className="btn btn-primary update-btn"
              onClick={() => {
                props.updateClick(props.articales, "update");
              }}
            >
              Update Article
            </button>
            <button
              type="button"
              className="btn btn-danger delete-btn"
              onClick={() => {
                deleteArticle();
                props.upAddClick("delete");
              }}
            >
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
