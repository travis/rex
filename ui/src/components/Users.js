import React, { Component } from 'react';
import './Users.css';

export default class Users extends Component {
  render() {
    const { users } = this.props
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
