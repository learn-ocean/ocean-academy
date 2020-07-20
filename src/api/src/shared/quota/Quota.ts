import { IsDate, IsMongoId, IsInt, IsOptional, IsEnum } from 'class-validator'

import { ObjectId } from 'mongodb'
import { DayJs } from '../../helpers/dayjs'
import { Property, Index, getModel } from '../../helpers/typegoose'
import { QuotaType } from './QuotaType'

@Index({ userId: 1, quotaType: 1 }, { unique: true })
@Index({ expireAt: 1 }, { expireAfterSeconds: 0 })
export class Quota {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, ref: 'User' })
  @IsMongoId()
  userId!: ObjectId

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(QuotaType)
  quotaType?: QuotaType

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsInt()
  count?: number

  @Property({
    required: true,
    default: DayJs().add(24, 'hour').toDate(),
  })
  @IsDate()
  expiresAt!: Date
}

export const QuotaModel = getModel(Quota, { schemaOptions: { timestamps: false } })
