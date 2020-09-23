import * as Router from '@koa/router'
import { Context } from 'koa'

import { getPublicUser } from './resolvers/page/getPublicUser/getPublicUser'
import { addProgress } from './resolvers/user/addProgress/addProgress'
import { changePassword } from './resolvers/user/changePassword/changePassword'
import { forgotPassword } from './resolvers/user/forgotPassword/forgotPassword'
import { login } from './resolvers/user/login/login'
import { resendEmailVerification } from './resolvers/user/resendEmailVerification/resendEmailVerification'
import { resetPassword } from './resolvers/user/resetPassword/resetPassword'
import { signUp } from './resolvers/user/signUp/signUp'
import { verifyEmail } from './resolvers/user/verifyEmail/verifyEmail'

const router = new Router()

router.get('/', async (ctx: Context) => {
  ctx.body = 'You are not supposed to be here ;)'
})

router.post('/user/sign-up', signUp)
router.post('/user/login', login)
router.post('/user/verify-email', verifyEmail)
router.post('/user/resend-email-verification', resendEmailVerification)
router.post('/user/add-progress', addProgress)
router.post('/user/reset-password', resetPassword)
router.post('/user/forgot-password', forgotPassword)
router.post('/user/change-password', changePassword)

router.post('/page/get-user', getPublicUser)

export { router }
