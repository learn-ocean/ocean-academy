import { Context } from 'koa'
import { format, transports } from 'winston'
import * as winston from 'winston'

import { DEVELOPMENT } from './constants'

export const logger = (): any => {
  winston.configure({
    level: process.env.NODE_ENV === DEVELOPMENT ? 'debug' : 'info',
    transports: [
      //
      // - Write all logs error (and below) to `error.log`.
      new transports.File({ filename: 'error.log', level: 'error' }),
      //
      // - Write to all logs with specified level to console.
      new transports.Console({
        format: format.combine(format.colorize(), format.simple()),
      }),
    ],
  })

  return async (ctx: Context, next: () => Promise<any>): Promise<void> => {
    const start = new Date().getTime()

    await next()

    const ms = new Date().getTime() - start

    let logLevel: string
    if (ctx.status >= 500) {
      logLevel = 'error'
    } else if (ctx.status >= 400) {
      logLevel = 'warn'
    } else {
      logLevel = 'info'
    }

    const msg = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`

    winston.log(logLevel, msg)
  }
}
