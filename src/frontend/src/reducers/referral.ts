import { RESET, RESTORE } from 'app/App.actions'
import { START_REFERRAL_COMMIT, REFFERRAL_INFO_COMMIT } from 'pages/User/Referral/Referral.actions'

type ReferralData = {
    completed: number
    invited: number
    referralCode: string
}

export type ReferralState = {
    started?: boolean
    data?: ReferralData
    referralCode?: string
}

const initReferralState: ReferralState = {started: undefined, referralCode: undefined}

export function referral(state = initReferralState, action: any): ReferralState {
  switch (action.type) {
    case RESET: {
      return initReferralState
    }
    case RESTORE: {
      return state
    }
    case START_REFERRAL_COMMIT: {
      return{
        ...state,
        referralCode: action.payload.referralCode
      }
    }
    case REFFERRAL_INFO_COMMIT: {
      return{
        ...state,
        started: action.payload.started,
        data: action.payload.data
      }
    }
    default:
      return state
  }
}
