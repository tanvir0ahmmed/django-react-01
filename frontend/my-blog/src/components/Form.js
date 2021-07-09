import React, { useState, useEffect } from "react";
import ApiService from "../lib/js/ApiService";
import { useCookies } from "react-cookie";

const Form = (props) => {
  //console.log(props.formData)
  const [title, setTitle] = useState(props.formData.title);
  const [description, setDescription] = useState(props.formData.description);
  //console.log(props.formData.user)
  const [token] = useCookies(["mytoken"]);
  useEffect(() => {
    setTitle(props.formData.title);
    setDescription(props.formData.description);
  }, [props]);

  //const user = props.formData.user
  //console.log('User Info ->',props.userInfo)
  //const user = 1

  const addBlog = () => {
    ApiService.AddArticle({ title, description }, token["mytoken"])
      .then((response) => console.log(response))
      .catch((error) => errorFunction(error));
  };

  const updateBlog = () => {
    ApiService.UpdateArticle(
      props.formData.id,
      { title, description },
      token["mytoken"]
    )
      .then((response) => console.log(response))
      .catch((error) => errorFunction(error));
  };
  const errorFunction = (err) => {
    console.log(err);
  };

  const handleClickEventFunc = (prop, func) => {
    //console.log('i am calling')
    props.upAddClick(prop);
    func();
  };

  return (
    <div className="form-section container">
      <div className="card">
        <div className="card-body">
          <span type="lable">Title ✈</span>
          <input
            type="text"
            className="form-control"
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span type="lable">Description</span>
          <textarea
            type="textarea"
            className="form-control"
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {props.upadd === "update" ? (
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleClickEventFunc("update", updateBlog)}
            >
              Update
            </button>
          ) : (
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleClickEventFunc("add", addBlog)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
