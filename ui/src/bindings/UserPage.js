import { graphql } from 'react-apollo';

import * as schema from '../schema'
import User from '../components/User'

export default graphql(
  schema.UserClaims,
  {options: ({match}) => ({variables: {id: match && match.params && match.params.id}}),
   props: ({data: {claimsForUser}}) => ({claims: claimsForUser})}
)(User)
