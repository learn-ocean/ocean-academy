import { Context, Next } from 'koa'

import * as getRandomCaptchaPairObject from '../resolvers/captcha/helpers/getRandomCaptchaPair'
import * as sendEmailVerifyEmailObject from '../resolvers/user/helpers/sendEmailVerifyEmail'
import { signUp } from '../resolvers/user/signUp/signUp'
import { CaptchaSolution } from '../shared/captcha/CaptchaSolution'
import { Jwt } from '../shared/user/Jwt'
import { User, UserModel } from '../shared/user/User'
import { mockConnect } from './mockConnect'

interface UserContextNext {
  user: User
  jwt: Jwt
  next: Next
}

interface CreateTestUser {
  (email: string, username: string, password: string): Promise<UserContextNext>
}

export const createTestUser: CreateTestUser = async (email, username, password) => {
  process.env.JWT_PRIVATE_KEY =
    '-----BEGIN RSA PRIVATE KEY-----\nMIIBOAIBAAJAdbl2XgrYP6biZBeaWDm0ejnmDipjNXG5qLXNQe5uxqXZDr3zvJP6\n9t9F0DttXWKqerb05LmwWYgnOOVPrmBN0wIDAQABAkAMyMg27DyRpQDe18VWIWYd\nA96c2TOO4TvFO4D/0PHMtp0AxQLC7gS6gMYXSG25gyBGl8ywhjYYKp4zdecxW5UB\nAiEA4RgFBMtaL2p6uNnJqa/kc5k4pGPUMii81Gig03S54IECIQCF43EeIykLl7SQ\nIEJRwx3SY+H6TqZOlqLhN3+PkVqEUwIga6lDbUGeRyOUwylX7VN131yf3PDqo3sc\npjPNCJbB+QECICNydvVaq7hE/uoVkFljRhb4mNCTWBaAbTkhX2VcP1G/AiBeEpLY\nsU90PIZjVhgSVgi+eA6gPAyZJzRoPB+3XyZ3ZQ==\n-----END RSA PRIVATE KEY-----'
  process.env.JWT_PUBLIC_KEY =
    '-----BEGIN PUBLIC KEY-----\nMFswDQYJKoZIhvcNAQEBBQADSgAwRwJAdbl2XgrYP6biZBeaWDm0ejnmDipjNXG5\nqLXNQe5uxqXZDr3zvJP69t9F0DttXWKqerb05LmwWYgnOOVPrmBN0wIDAQAB\n-----END PUBLIC KEY-----'
  await mockConnect()

  const captchaIndex = 0
  const captchaSolution: CaptchaSolution = '0000'

  jest.spyOn(getRandomCaptchaPairObject, 'getRandomCaptchaPair').mockReturnValue({ captchaIndex, captchaSolution })
  jest.spyOn(sendEmailVerifyEmailObject, 'sendEmailVerifyEmail').mockImplementation(async () => Promise.resolve())

  const signUpContext: Context = {
    request: {
      headers: {},
      body: {
        email,
        username,
        password,
        confirmPassword: password,
        recaptchaToken:
          'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
      },
    },
  } as Context

  const next: Next = (async () => Promise.resolve()) as Next

  await signUp(signUpContext, next)

  const user: User = (await UserModel.findOne({ username: username }).lean()) as User

  const jwt: Jwt = signUpContext.body.jwt

  return { user, jwt, next }
}
