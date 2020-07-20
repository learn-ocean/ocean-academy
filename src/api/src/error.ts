import { Context, Next } from 'koa'

export const error = () => async (ctx: Context, next: Next): Promise<void> => {
  try {
    await next()
  } catch (err) {
    console.error(err)
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      error: err.message,
    }
    // ctx.app.emit('error', err, ctx);
  }
}
