import { graphql } from 'react-apollo';

import * as schema from '../schema'
import Users from '../components/Users'

export default graphql(
  schema.Users,
  {props: ({data: {users}}) => ({users: users})}
)(Users)
