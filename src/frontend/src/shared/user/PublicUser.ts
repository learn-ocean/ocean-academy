import { IsArray, IsDate, IsEmail, IsMongoId, IsNumber, Length, Matches, Min } from 'class-validator'
import { MintedToken } from './User'
import { ObjectId } from 'mongodb'
import { Property } from '../../helpers/typegoose'

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

  @IsEmail()
  emailVerified?: boolean

  @IsArray()
  progress?: string[]

  @IsDate()
  createdAt!: Date

  @Property()
  tokens?: Map<string, MintedToken>
}
