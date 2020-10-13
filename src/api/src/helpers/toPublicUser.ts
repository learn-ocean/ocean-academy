import { PublicUser } from '../shared/user/PublicUser'
import { User } from '../shared/user/User'

export const toPublicUser = (user: User): PublicUser => {
  return {
    _id: user._id,
    username: user.username,
    name: user.name,
    emailVerified: user.emailVerified,
    progress: user.progress,
    createdAt: user.createdAt,
  }
}
