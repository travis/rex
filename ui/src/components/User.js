import React, { Component } from 'react';
import './User.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ClaimsComponent } from './Claims'


class User extends Component {
  render() {
    const { claimsForUser } = this.props.data
    return (
        <div className="User">
          <ClaimsComponent claims={claimsForUser}/>
        </div>
    );
  }
}


export default graphql(gql`
  query UserClaims($id: ID!) {
    claimsForUser(id: $id) {
      id
      url
      title
    }
  }
`,
                       {options: ({match}) => console.log("HAM", match) || ({variables: {id: match && match.params && match.params.id}})}
                      )(User);
