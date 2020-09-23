import { Expose } from 'class-transformer'
import { IsEmail, IsJWT, Length, Matches } from 'class-validator'

import { IsEqualTo } from './IsEqualTo'
import { Jwt } from './Jwt'
import { PublicUser } from './PublicUser'

export class SignUpInputs {
  @Expose()
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Expose()
  @IsEmail()
  email!: string

  @Expose()
  @Length(8, 50)
  @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(.+)$/, { message: 'Password must have at least one letter and one digit' })
  password!: string

  @Expose()
  @Length(8, 50)
  @IsEqualTo('password')
  confirmPassword!: string

  @Expose()
  @Length(100, 1000)
  recaptchaToken!: string
}

export class SignUpOutputs {
  @Expose()
  @IsJWT()
  jwt!: Jwt

  @Expose()
  user!: PublicUser
}
