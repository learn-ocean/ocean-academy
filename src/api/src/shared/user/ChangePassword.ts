import { Length, Matches } from 'class-validator'
import { Expose } from 'class-transformer'

export class ChangePasswordInputs {
  @Expose()
  @Length(8, 50)
  @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(.+)$/, { message: 'Password must have at least one letter and one digit' })
  password!: string

  @Expose()
  @Length(8, 50)
  @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(.+)$/, { message: 'Password must have at least one letter and one digit' })
  newPassword!: string
}

export class ChangePasswordOutputs {}
