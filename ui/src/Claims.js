import React, { Component } from 'react';
import './Claims.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


export class ClaimsComponent extends Component {
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


export default graphql(gql`
  query Claims {
    claims {
      id
      url
      title
    }
  }
`,
                       {props: ({data: {claims}}) => ({claims: claims})}
                      )(ClaimsComponent);
