import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ScrollToTop from "./ScrollToTop";
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
export default function App() {
  return (
    <div className="App"> 
    <CookiesProvider>
      <Router>
        {/* <ScrollToTop/> */}
        <Switch>
          <Route exact path="/"  component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
      </CookiesProvider>
    </div>
  )
}
