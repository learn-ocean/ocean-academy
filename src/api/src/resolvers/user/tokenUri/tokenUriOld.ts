import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { TokenUriInputsOld } from '../../../shared/user/TokenUri'


export const tokenUriOld = async (ctx: Context): Promise<void> => {
  console.log("Username", ctx.params.username)

  const tokenUriArgs = plainToClass(TokenUriInputsOld, ctx.params, { excludeExtraneousValues: true })
  await validateOrReject(tokenUriArgs, { forbidUnknownValues: true }).catch(firstError)
  let { username } = tokenUriArgs

  ctx.response.redirect(`/user/token-uri/${username}/ocean101`)
}
