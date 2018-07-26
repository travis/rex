import React, { Component } from 'react';
import './User.css';
import Claims from './Claims'

export default class User extends Component {
  render() {
    const { claims } = this.props
    return (
        <div className="User">
          <Claims claims={claims}/>
        </div>
    );
  }
}
