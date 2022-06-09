import { store } from "index"
import { ClaimRewardInputs } from "shared/referral/ClaimReferral"
import { ReferralInfoInputs } from "shared/referral/ReferralInfo"
import { StartReferralInputs } from "shared/referral/StartReferral"
import { showToaster } from "app/App.components/Toaster/Toaster.actions"
import { SUCCESS } from "app/App.components/Toaster/Toaster.constants"
export const START_REFERRAL_REQUEST = 'START_REFERRAL_REQUEST'
export const START_REFERRAL_COMMIT = 'START_REFERRAL_COMMIT'
export const START_REFERRAL_ROLLBACK = 'START_REFERRAL_ROLLBACK'

export const startReferral = ({}: StartReferralInputs) => (dispatch: any) => {
  dispatch({
    type: START_REFERRAL_REQUEST,
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/referral/start`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
        },
        json: {},
        commit: { type: START_REFERRAL_COMMIT, meta: {} },
        rollback: { type: START_REFERRAL_ROLLBACK, meta: {} },
      },
    },
  })
}

export const REFERRAL_INFO_REQUEST = 'REFERRAL_INFO_REQUEST'
export const REFFERRAL_INFO_COMMIT = 'REFFERRAL_INFO_COMMIT'
export const REFFERRAL_INFO_ROLLBACK = 'REFFERRAL_INFO_ROLLBACK'

export const getReferralInfo = ({}: ReferralInfoInputs) => (dispatch: any) => {
  dispatch({
    type: REFERRAL_INFO_REQUEST,
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/referral/info`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: {},
        },
        commit: { type: REFFERRAL_INFO_COMMIT },
        rollback: { type: REFFERRAL_INFO_ROLLBACK},
      },
    },
  })
}

export const CLAIM_REWARD_REQUEST = 'CLAIM_REWARD_REQUEST'
export const CLAIM_REWARD_COMMIT = 'CLAIM_REWARD_COMMIT'
export const CLAIM_REWARD_ROLLBACK = 'CLAIM_REWARD_ROLLBACK'

export const claimReward = ({publicAddress, signedNonce}: ClaimRewardInputs) => (dispatch: any) => {
  dispatch({
    type: CLAIM_REWARD_REQUEST,
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/referral/claim-reward`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: {publicAddress, signedNonce},
        },
        commit: { type: CLAIM_REWARD_COMMIT, meta: {
          thunks: [showToaster(SUCCESS, 'Transaction reward was sent.', 'Verify in Polygon the status.')],
        } },
        rollback: { type: CLAIM_REWARD_ROLLBACK},
      },
    },
  })
}