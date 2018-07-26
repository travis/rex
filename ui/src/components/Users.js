import React, { Component } from 'react';
import './Users.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class Users extends Component {
  render() {
    const { users } = this.props.data
    return (
        <div className="Users">
          <ul>
          {users && users.map(({id, email, firstName, lastName}) => (
            <li key={id}>
              <a href={"/user/" + id}>{firstName} {lastName}</a>
              <a href={"mailto:" + email}>{email}</a>
            </li>
          ))}
          </ul>
        </div>
    );
  }
}


export default graphql(gql`
  query Users {
    users {
      id
      email
      firstName
      lastName
    }
  }
`)(Users);
