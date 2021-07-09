import "../lib/Sass/_register.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import ApiService from "../lib/js/ApiService";
const Register = () => {
  const [token] = useCookies(["mytoken"]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  /* useEffect(() => {
    if (token["mytoken"]) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [history, token]); */
  const goLogin = () => {
    history.push("/");
  };
  const goLoginWithReg = () => {
    ApiService.AddUser({ username, password })
      .then((response) => {
        console.log("Response:", response.error);
        if (response.error === "error") history.push("/register");
        else history.push("/");
      })
      .catch((error) => console.log("ERR", error));
  };
  return (
    <section id="register-section">
      <div className="register-container">
        <div className="card register-card">
          <div className="card-body">
            <legend className="lable">Username</legend>
            <input
              className="username form-control"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <legend className="lable">Password</legend>
            <input
              className="password form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              className="register-btn btn btn-primary"
              type="submit"
              onClick={() => {
                goLoginWithReg();
              }}
            >
              Register
            </button>
            <h4 className="reg-link">
              {" "}
              Have account? Please
              <a
                href="#log"
                onClick={() => {
                  goLogin();
                }}
              >
                {" "}
                Login
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
