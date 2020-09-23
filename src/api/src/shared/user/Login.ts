import { Expose } from 'class-transformer'
import { IsJWT, Length, Matches } from 'class-validator'

import { Jwt } from './Jwt'
import { PublicUser } from './PublicUser'

export class LoginInputs {
  @Expose()
  @Length(2, 50)
  usernameOrEmail!: string

  @Expose()
  @Length(8, 50)
  @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(.+)$/, { message: 'Password must have at least one letter and one digit' })
  password!: string

  @Expose()
  @Length(100, 1000)
  recaptchaToken!: string
}

export class LoginOutputs {
  @Expose()
  @IsJWT()
  jwt!: Jwt

  @Expose()
  user!: PublicUser
}
