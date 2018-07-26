import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Claims from './components/Claims'
import Users from './components/Users'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">welcome to rex</h1>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/claims">Claims</Link>
              </li>
            </ul>
          </header>
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
          <Route path="/claims" component={Claims} />
        </div>
      </Router>
    );
  }
}

export default App;
