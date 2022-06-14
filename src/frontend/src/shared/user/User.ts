// prettier-ignore
import { IsBoolean, IsDate, IsEmail, IsMongoId, IsNumber, IsOptional, Length, Matches, Min } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'

export interface MintedToken{
  course: string;
  account: string;
  tokenUri: string;
  tx: string;
  mintedAt: Date;
  tokenId: number;
}
class ProgressUnit{
    @Property({required: true})
    @IsDate()
    chapter!: number

    @Property({required: true})
    @IsDate()
    completedAt!: Date;
}

export class CourseProgress{
    @Property({required: true})
    progress!: ProgressUnit[]

    @Property()
    @IsDate()
    completedAt?: Date;
}

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

  @Property()
  @IsNumber()
  @Min(0)
  tokenId?: number

  @Property({ required: true, unique: true, index: true })
  @IsEmail()
  email!: string

  @Property({ default: false })
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

  @Property({index: true, unique: true})
  @IsNumber()
  @Min(0)
  userId!: number;

  @Property()
  tokens ?: Map<string, MintedToken>

  @Property({optional: true, _id: false})
  ocean101?: CourseProgress

  @Property({optional: true, _id: false})
  introToDataDefi?: CourseProgress

  @Property({optional: true, _id: false})
  ComputeToData?: CourseProgress
}

export const UserModel = getModel(User, { schemaOptions: { timestamps: true } })
