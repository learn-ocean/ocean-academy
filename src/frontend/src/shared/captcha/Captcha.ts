import * as crypto from 'crypto'
import { IsDate, IsEnum, IsMongoId, Length, IsInt, IsOptional } from 'class-validator'

import { ObjectId } from 'mongodb'
import { DayJs } from '../../helpers/dayjs'
import { Property, Index, getModel } from '../../helpers/typegoose'
import { CaptchaFor } from './CaptchaFor'

@Index({ userId: 1, captchaFor: 1 }, { unique: true })
@Index({ expireAt: 1 }, { expireAfterSeconds: 0 })
export class Captcha {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ required: true })
  @IsInt()
  index!: number

  @Property({ required: true })
  @Length(4, 4)
  solution!: string

  @Property({ required: true })
  @IsEnum(CaptchaFor)
  captchaFor!: CaptchaFor

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  attempts?: number

  @Property({
    required: true,
    default: crypto.randomBytes(16).toString('hex'),
  })
  @Length(16, 16)
  token!: string

  @Property({
    required: true,
    default: DayJs().add(1, 'hour').toDate(),
  })
  @IsDate()
  expiresAt!: Date

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const CaptchaModel = getModel(Captcha, { schemaOptions: { timestamps: true } })
