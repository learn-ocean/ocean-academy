import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class VerifyEmailInputs {
  @Expose()
  @Length(4, 4)
  solution!: string
}

export class VerifyEmailOutputs {}
