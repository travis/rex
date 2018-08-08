import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ClaimsPage from './bindings/ClaimsPage'
import UsersPage from './bindings/UsersPage'
import UserPage from './bindings/UserPage'

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
          <Route path="/users" component={UsersPage} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/claims" component={ClaimsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
