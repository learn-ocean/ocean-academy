import { Expose } from 'class-transformer'
import { IsString, Length } from 'class-validator'

export class TokenUriInputs {
  @Expose()
  @Length(2, 100)
  username!: string
}

export class TokenUriOutputs {
  @Expose()
  @IsString()
  name!: string

  @Expose()
  @IsString()
  description!: string

  @Expose()
  @IsString()
  image!: string
}
