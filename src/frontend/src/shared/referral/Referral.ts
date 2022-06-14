import { ObjectId } from 'mongodb'
import {IsMongoId, Length, IsHexadecimal, Matches, IsIn } from 'class-validator'
import { getModel,Index, Property } from '../../helpers/typegoose'

export const REFERRAL_STATUS = {
    STARTED: "STARTED",
    CLAIMED: "CLAIMED",
    RECEIVED: "RECEIVED"
}

@Index({ userId: 1 }, { unique: true })
export class Referral{
    @IsMongoId()
    readonly _id!: ObjectId 

    @Property({required: true, ref: 'User'})
    @IsMongoId()
    referrerId!: ObjectId

    @Property({ required: true})
    @IsHexadecimal()
    @Length(6, 24)
    referralCode!: string

    @Property({ required: true})
    @IsHexadecimal()
    @Length(6, 24)
    nonce!: number

    @Property({optional: true, default: []})
    referredUsers!: ObjectId[]

    @Property({optional: true})
    @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Not a valid address hash' })
    publicAddress?: string

    @Property({optional: true})
    @Matches(/^0x([A-Fa-f0-9]{64})$/, { message: 'Not a valid address hash' })
    tx?: string

    @Property({required: true, default: REFERRAL_STATUS.STARTED})
    @IsIn([REFERRAL_STATUS.STARTED, REFERRAL_STATUS.CLAIMED, REFERRAL_STATUS.RECEIVED])
    status!: string
}

export const ReferralModel = getModel(Referral, { schemaOptions: { timestamps: true } })