import { PrivateUser } from '../shared/user/PrivateUser'
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
    userId: user.userId,
  }
}

export const toPrivateUser = (user: User): PrivateUser => {
  return {
    _id: user._id,
    username: user.username,
    name: user.name,
    emailVerified: user.emailVerified,
    email: user.email,
    progress: user.progress,
    createdAt: user.createdAt,
    userId: user.userId,
    tokens: user.tokens,
    ocean101: user.ocean101,
    introToDataDefi: user.introToDataDefi,
    ComputeToData: user.ComputeToData
  }
}
