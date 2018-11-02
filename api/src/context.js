import { User } from './models'

export default ({req: request}) => (
  {
    currentUser: request.user
  }
)
