import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class ForgotPasswordInputs {
  @Expose()
  @Length(2, 50)
  usernameOrEmail!: string

  @Expose()
  @Length(100, 1000)
  recaptchaToken!: string
}

export class ForgotPasswordOutputs {
  @Expose()
  @Length(16, 16)
  token!: string
}
