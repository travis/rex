import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { graphql } from 'react-apollo';
import * as schema from './schema';
import Claims from './components/Claims'
import Users from './components/Users'
import User from './components/User'

const ClaimsPage = graphql(schema.Claims,
                           {props: ({data: {claims}}) => ({claims: claims})}
                          )(Claims)

const UserPage = graphql(schema.UserClaims,
                         {options: ({match}) => ({variables: {id: match && match.params && match.params.id}}),
                          props: ({data: {claimsForUser}}) => ({claims: claimsForUser})}
                        )(User)

const UsersPage = graphql(schema.Users,
                          {props: ({data: {users}}) => ({users: users})}
                         )(Users)

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
