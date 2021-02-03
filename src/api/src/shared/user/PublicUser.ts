import { IsArray, IsDate, IsEmail, IsMongoId, IsNumber, Length, Matches, Min } from 'class-validator'
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

  @Length(2, 40)
  name!: string

  @IsEmail()
  emailVerified?: boolean

  @IsArray()
  progress?: string[]

  @IsDate()
  createdAt!: Date
}
