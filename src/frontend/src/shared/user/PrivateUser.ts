import { IsArray, IsBoolean, IsDate, IsEmail, IsMongoId, IsNumber, Length, Matches, Min } from 'class-validator'
import { MintedToken, CourseProgress } from './User'
import { ObjectId } from 'mongodb'

export class PrivateUser {
  @IsMongoId()
  readonly _id!: ObjectId

  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @IsNumber()
  @Min(0)
  tokenId?: number

  @IsEmail()
  email!: string

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

  ocean101?: CourseProgress

  introToDataDefi?: CourseProgress

  ComputeToData?: CourseProgress

  tokens?: Map<string, MintedToken>
}
