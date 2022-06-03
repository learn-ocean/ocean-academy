import { Context, Next } from 'koa'
import { toPrivateUser } from '../../../helpers/toPublicUser'
import { GetPrivateUserOutputs } from '../../../shared/page/GetPrivateUser'
import { authenticate } from '../../user/helpers/authenticate'
import { User } from '../../../shared/user/User'

export const getPrivateUser = async (ctx: Context, next: Next): Promise<void> => {
  const rawUser: User = (await authenticate(ctx))
  const user = toPrivateUser(rawUser)
  const response: GetPrivateUserOutputs = { user }

  ctx.status = 200
  ctx.body = response

  await next()
}
