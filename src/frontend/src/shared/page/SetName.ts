import { Length } from 'class-validator'
import { Expose } from 'class-transformer'
import { PublicUser } from '../user/PublicUser'

export class SetNameInputs {
  @Expose()
  @Length(2, 40)
  name!: string
}

export class SetNameOutputs {
  user!: PublicUser
}
