import React, { Component } from 'react';
import './Claims.css';

export default class Claims extends Component {
  render() {
    const { claims } = this.props
    return (
        <div className="Claims">
          <ul>
        {claims && claims.map(({id, title, url}) => (
            <li key={id}><a href={"/" + url}>{title}</a></li>
        ))}
          </ul>
        </div>
    );
  }
}
