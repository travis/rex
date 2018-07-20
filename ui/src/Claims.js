import React, { Component } from 'react';
import './Claims.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class Claims extends Component {
  render() {
    const { claims } = this.props.data
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


export default graphql(gql`
  query Claims {
    claims {
      id
      url
      title
    }
  }
`)(Claims);
