export class ResponseError extends Error {
  status: number
  expose: boolean

  constructor(status: number, m: string) {
    super(m)
    this.status = status
    this.expose = status < 500

    Object.setPrototypeOf(this, ResponseError.prototype)
  }
}
