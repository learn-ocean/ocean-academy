import { Matches } from 'class-validator'
import { Expose } from 'class-transformer'

export class ClaimRewardInputs {
    @Expose()
    @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Not a valid address hash' })
    publicAddress!: string;

    @Expose()
    signedNonce!: string;
}

export class ClaimRewardOutputs {
    @Expose()
    tx!: string;
}
