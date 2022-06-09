import { IsArray, IsBoolean, IsDate, IsMongoId, IsNumber, Length, Matches, Min } from 'class-validator'
import { ObjectId } from 'mongodb'

export class PublicUser {
  @IsMongoId()
  readonly _id!: ObjectId

  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @IsNumber()
  @Min(0)
  tokenId?: number

  @IsNumber()
  @Min(0)
  userId!: number

  @Length(2, 40)
  name!: string

  @IsBoolean()
  emailVerified?: boolean

  @IsArray()
  progress?: string[]

  @IsDate()
  createdAt!: Date
}
