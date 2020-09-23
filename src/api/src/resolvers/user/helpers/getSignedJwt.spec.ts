import * as jsonwebtoken from 'jsonwebtoken'

import { Jwt } from '../../../shared/user/Jwt'
import { JwtDecoded } from '../../../shared/user/JwtDecoded'
import { UserRole } from '../../../shared/user/UserRole'
import { getSignedJwt } from './getSignedJwt'

describe('User', () => {
  beforeAll(() => {
    process.env.JWT_PRIVATE_KEY =
      '-----BEGIN RSA PRIVATE KEY-----\nMIIBOAIBAAJAdbl2XgrYP6biZBeaWDm0ejnmDipjNXG5qLXNQe5uxqXZDr3zvJP6\n9t9F0DttXWKqerb05LmwWYgnOOVPrmBN0wIDAQABAkAMyMg27DyRpQDe18VWIWYd\nA96c2TOO4TvFO4D/0PHMtp0AxQLC7gS6gMYXSG25gyBGl8ywhjYYKp4zdecxW5UB\nAiEA4RgFBMtaL2p6uNnJqa/kc5k4pGPUMii81Gig03S54IECIQCF43EeIykLl7SQ\nIEJRwx3SY+H6TqZOlqLhN3+PkVqEUwIga6lDbUGeRyOUwylX7VN131yf3PDqo3sc\npjPNCJbB+QECICNydvVaq7hE/uoVkFljRhb4mNCTWBaAbTkhX2VcP1G/AiBeEpLY\nsU90PIZjVhgSVgi+eA6gPAyZJzRoPB+3XyZ3ZQ==\n-----END RSA PRIVATE KEY-----'
  })

  it('can get a signed JWT for users', () => {
    const _id = 'testId'
    const username = 'testUsername'

    const jwt: Jwt = getSignedJwt(_id, username)
    expect(jwt).toBeDefined()

    const jwtDecoded: JwtDecoded = jsonwebtoken.decode(jwt) as JwtDecoded

    expect(jwtDecoded._id).toEqual(_id)
    expect(jwtDecoded.username).toEqual(username)
    expect(jwtDecoded.expiresAt).toBeDefined()
    expect(jwtDecoded.exp).toEqual(jwtDecoded.iat + 2592000)
    expect(jwtDecoded.sub).toEqual(username)
  })

  it('can get a signed JWT for admins', () => {
    const _id = 'testId'
    const username = 'testUsername'

    const jwt: Jwt = getSignedJwt(_id, username, UserRole.ADMIN)
    expect(jwt).toBeDefined()

    const jwtDecoded: JwtDecoded = jsonwebtoken.decode(jwt) as JwtDecoded

    expect(jwtDecoded.userRole).toEqual(UserRole.ADMIN)
  })
})
