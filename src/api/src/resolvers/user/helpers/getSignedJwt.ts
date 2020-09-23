import * as dayjs from 'dayjs'
import * as jsonwebtoken from 'jsonwebtoken'
import { Secret, SignOptions } from 'jsonwebtoken'

import { Jwt } from '../../../shared/user/Jwt'
import { JwtPayload } from '../../../shared/user/JwtPayload'
import { UserRole } from '../../../shared/user/UserRole'

interface GetSignedJwt {
  (_id: string, username: string, userRole?: UserRole): Jwt
}

export const getSignedJwt: GetSignedJwt = (_id, username, userRole) => {
  const expiresAt: Date = dayjs().add(30, 'day').toDate()

  const payload: JwtPayload = {
    _id,
    username,
    userRole,
    expiresAt,
  }

  const signOptions: SignOptions = {
    issuer: 'OceanAcademy',
    subject: username + '',
    audience: 'https://oceanacademy.io',
    expiresIn: '30d',
    algorithm: 'RS256',
  }

  const jwt: Jwt = jsonwebtoken.sign(payload, process.env.JWT_PRIVATE_KEY as Secret, signOptions)

  return jwt
}
