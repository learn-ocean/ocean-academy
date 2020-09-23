import { Context } from 'koa'

import { ResponseError } from '../../../shared/mongo/ResponseError'
import { Jwt } from '../../../shared/user/Jwt'
import { JwtPayload } from '../../../shared/user/JwtPayload'
import { User, UserModel } from '../../../shared/user/User'
import { verifySignedJwt } from './verifySignedJwt'

interface Authenticate {
  (ctx: Context): Promise<User>
}

export const authenticate: Authenticate = async (ctx) => {
  const bearerToken = ctx.request.headers ? ctx.request.headers.authorization : undefined
  if (!bearerToken) throw new ResponseError(401, 'No bearer token present in request')

  const jwt: Jwt = bearerToken.replace('Bearer ', '')

  const jwtPayload: JwtPayload = verifySignedJwt(jwt)

  const user: User = (await UserModel.findOne({ _id: jwtPayload._id }).lean()) as User
  if (!user) throw new ResponseError(404, 'User not found')

  return user
}
