import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { IsCertifiedInputs, IsCertifiedOutputs } from '../../../shared/user/IsCertified'
import { UserModel } from '../../../shared/user/User'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified createdAt'

export const isCertified = async (ctx: Context, next: Next): Promise<void> => {
  const isCertifiedArgs = plainToClass(IsCertifiedInputs, ctx.request.query.name, { excludeExtraneousValues: true })
  await validateOrReject(isCertifiedArgs, { forbidUnknownValues: true }).catch(firstError)
  let { name } = isCertifiedArgs

  name = name.toLowerCase()

  let userFound = false
  let isCertified = false

  const user = await UserModel.findOne({ name: { $regex: new RegExp("^" + name.toLowerCase(), "i") } }).lean()

  if (user) userFound = true
  if (user?.progress?.length && user?.progress?.length >= 20) isCertified = true

  const response: IsCertifiedOutputs = { userFound, isCertified }

  ctx.status = 200
  ctx.body = response

  await next()
}
