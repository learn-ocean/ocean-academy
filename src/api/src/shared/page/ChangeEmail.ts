import { IsEmail } from 'class-validator'
import { Expose } from 'class-transformer'
import { PrivateUser } from '../user/PrivateUser'

export class ChangeEmailInputs {
  @Expose()
  @IsEmail()
  email!: string
}

export class ChangeEmailOutputs {
  user!: PrivateUser
}
