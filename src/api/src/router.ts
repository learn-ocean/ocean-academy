import * as Router from '@koa/router'
import { Context } from 'koa'
import { changeEmail } from './resolvers/page/changeEmail/changeEmail'
import { getPrivateUser } from './resolvers/page/getPrivateUser/getPrivateUser'
import { getPublicUser } from './resolvers/page/getPublicUser/getPublicUser'
import { setName } from './resolvers/page/setName/setName'
import { addProgress } from './resolvers/user/addProgress/addProgress'
import { changePassword } from './resolvers/user/changePassword/changePassword'
import { forgotPassword } from './resolvers/user/forgotPassword/forgotPassword'
import { isCertified } from './resolvers/user/isCertified/isCertified'
import { login } from './resolvers/user/login/login'
import { startReferral } from './resolvers/referral/startReferral'
import { requestEmailVerification } from './resolvers/user/requestEmailVerification/requestEmailVerification'
import { resetPassword } from './resolvers/user/resetPassword/resetPassword'
import { signUp } from './resolvers/user/signUp/signUp'
import { tokenUri } from './resolvers/user/tokenUri/tokenUri'
import { tokenUriOld } from './resolvers/user/tokenUri/tokenUriOld'
import {verifyEmail} from './resolvers/user/verifyEmail/verifyEmail'
import { referralInfo } from './resolvers/referral/referralInfo'
import { claimReward } from './resolvers/referral/claimReward'

const router = new Router()

router.get('/', async (ctx: Context) => {
  ctx.body = 'You are not supposed to be here ;)'
})

router.post('/user/sign-up', signUp)
router.post('/user/login', login)
router.post('/user/add-progress', addProgress)
router.post('/user/reset-password', resetPassword)
router.post('/user/forgot-password', forgotPassword)
router.post('/user/change-password', changePassword)
router.post('/user/verify-email', verifyEmail)
router.post('/user/request-email-verification', requestEmailVerification)
router.get('/user/is-certified', isCertified)
router.get('/user/token-uri/:username/:course', tokenUri)
router.get('/user/token-uri/:username', tokenUriOld)
router.post('/page/get-user', getPrivateUser)
router.post('/page/get-public-user', getPublicUser)
router.post('/page/set-name', setName)
router.post('/page/change-email', changeEmail)
//Referral
router.post('/referral/start', startReferral)
router.post('/referral/info', referralInfo)
router.post('/referral/claim-reward', claimReward)


export { router }
