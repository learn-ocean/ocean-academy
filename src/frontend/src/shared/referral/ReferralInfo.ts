import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class ReferralInfoInputs {}

export class ReferralInfoOutputs {

    @Expose()
    data?: ReferralInfoData

    @Expose()
    started!: boolean
}

class ReferralInfoData{
    @Expose()
    @Length(6, 24)
    referralCode!: string

    @Expose()
    completed!: number

    @Expose()
    invited!: number

    @Expose()
    nonce!: number
}
