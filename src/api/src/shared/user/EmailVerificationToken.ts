import { IsDate, IsMongoId, Length, IsHexadecimal  } from 'class-validator'
import { Expose } from 'class-transformer'
import { ObjectId } from 'mongodb'
import { DayJs } from '../../helpers/dayjs'
import { Property, Index, getModel } from '../../helpers/typegoose'

export class EmailVerificationInputs{
  @Expose()
  @Length(6)
  token!: string

  @Expose()
  @Length(100, 1000)
  recaptchaToken!: string
}

@Index({ expiresAt: 1 }, { expireAfterSeconds: 0 })
export class EmailVerification {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ required: true})
  @IsHexadecimal()
  @Length(6)
  token?: string

  @Property({
    required: true,
    default: DayJs().add(30, 'minute').toDate(),
  })
  @IsDate()
  expiresAt!: Date
}

export const EmailVerificationModel = getModel(EmailVerification, { schemaOptions: { timestamps: false } })