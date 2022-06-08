import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class StartReferralInputs {
}

export class StartReferralOutputs {
    @Expose()
    @Length(6, 24)
    referralCode!: string
}
