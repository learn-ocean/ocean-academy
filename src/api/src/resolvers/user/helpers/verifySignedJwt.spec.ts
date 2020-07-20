import { Jwt } from '../../../shared/user/Jwt'
import { JwtPayload } from '../../../shared/user/JwtPayload'
import { getSignedJwt } from './getSignedJwt'
import { verifySignedJwt } from './verifySignedJwt'

describe('User', () => {
  beforeAll(() => {
    process.env.JWT_PRIVATE_KEY =
      '-----BEGIN RSA PRIVATE KEY-----\nMIIBOAIBAAJAdbl2XgrYP6biZBeaWDm0ejnmDipjNXG5qLXNQe5uxqXZDr3zvJP6\n9t9F0DttXWKqerb05LmwWYgnOOVPrmBN0wIDAQABAkAMyMg27DyRpQDe18VWIWYd\nA96c2TOO4TvFO4D/0PHMtp0AxQLC7gS6gMYXSG25gyBGl8ywhjYYKp4zdecxW5UB\nAiEA4RgFBMtaL2p6uNnJqa/kc5k4pGPUMii81Gig03S54IECIQCF43EeIykLl7SQ\nIEJRwx3SY+H6TqZOlqLhN3+PkVqEUwIga6lDbUGeRyOUwylX7VN131yf3PDqo3sc\npjPNCJbB+QECICNydvVaq7hE/uoVkFljRhb4mNCTWBaAbTkhX2VcP1G/AiBeEpLY\nsU90PIZjVhgSVgi+eA6gPAyZJzRoPB+3XyZ3ZQ==\n-----END RSA PRIVATE KEY-----'
    process.env.JWT_PUBLIC_KEY =
      '-----BEGIN PUBLIC KEY-----\nMFswDQYJKoZIhvcNAQEBBQADSgAwRwJAdbl2XgrYP6biZBeaWDm0ejnmDipjNXG5\nqLXNQe5uxqXZDr3zvJP69t9F0DttXWKqerb05LmwWYgnOOVPrmBN0wIDAQAB\n-----END PUBLIC KEY-----'
  })

  it('can verify a signed JWT', () => {
    const _id = 'testId'
    const username = 'testUsername'

    const jwt: Jwt = getSignedJwt(_id, username)
    expect(jwt).toBeDefined()

    const jwtPayload: JwtPayload = verifySignedJwt(jwt)

    expect(jwtPayload._id).toEqual(_id)
    expect(jwtPayload.username).toEqual(username)
  })

  it('jwt verification throws error if not correct', () => {
    try {
      const jwt: Jwt =
        'QyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ0ZXN0SWQiLCJ1c2VybmFtZSI6InRlc3RVc2VybmFtZSIsImV4cGlyZXNBdCI6IjIwMjAtMDMtMjlUMTU6MDY6NTUuODgyWiIsImlhdCI6MTU4MjkwNjAxNSwiZXhwIjoxNTg1NDk4MDE1LCJhdWQiOiJodHRwczovL3NlcnZlcmxlc3NzdGFjay5jb20iLCJpc3MiOiJTZXJ2ZXJsZXNzIFN0YWNrIiwic3ViIjoidGVzdFVzZXJuYW1lIn0.CTPWh2tdNNwQyWPZQT3iYn7iwN3dL2ziLRMBXTDNFgpiEHmAO1t5f8ioEclMNLfUXEA0buWh_ntInPOIIOAhsw'

      verifySignedJwt(jwt)

      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('invalid token')
    }
  })
})
