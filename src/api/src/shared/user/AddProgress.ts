import { Expose } from 'class-transformer'
import { Length, Matches } from 'class-validator'

import { PublicUser } from '../user/PublicUser'

export class AddProgressInputs {
  @Expose()
  @Length(2, 100)
  @Matches(/^[a-zA-Z0-9-\/]*$/, { message: 'Chapter slug can only contain letters, numbers, dashes and slashes' })
  chapterDone!: string
}

export class AddProgressOutputs {
  @Expose()
  user!: PublicUser
}
