// prettier-ignore
import { IsBoolean, IsDate, IsEmail, IsMongoId, IsOptional, Length, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'

export class User {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, unique: true, index: true })
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Property()
  @Length(2, 40)
  name!: string

  @Property({ required: true, unique: true, index: true })
  @IsEmail()
  email!: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsBoolean()
  emailVerified?: boolean

  @Property({ required: true })
  hashedPassword!: string

  @Property({ nullable: true, optional: true })
  progress?: string[]

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const UserModel = getModel(User, { schemaOptions: { timestamps: true } })
