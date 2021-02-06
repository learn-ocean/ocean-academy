import { Expose } from 'class-transformer'
import { IsBoolean, Length } from 'class-validator'

export class IsCertifiedInputs {
  @Expose()
  @Length(2, 100)
  name!: string
}

export class IsCertifiedOutputs {
  @Expose()
  @IsBoolean()
  userFound!: boolean

  @Expose()
  @IsBoolean()
  isCertified!: boolean
}
