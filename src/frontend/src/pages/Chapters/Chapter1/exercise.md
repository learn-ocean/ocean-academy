// Type your solution below
export const clone = (ctx: Context): Context => {
  return JSON.parse(JSON.stringify(ctx))
}