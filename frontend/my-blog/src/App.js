import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ScrollToTop from "./ScrollToTop";
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
export default function App() {
  return (
    <div className="App"> 
      <Router>
        {/* <ScrollToTop/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  )
}
