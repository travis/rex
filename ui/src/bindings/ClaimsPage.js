import { graphql } from 'react-apollo';

import * as schema from '../schema'
import Claims from '../components/Claims'

export default graphql(
  schema.Claims,
  {props: ({data: {claims}}) => ({claims: claims})}
)(Claims)
