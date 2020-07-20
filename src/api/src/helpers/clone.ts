import { Context } from 'koa'

export const clone = (ctx: Context): Context => {
  return JSON.parse(JSON.stringify(ctx))
}
