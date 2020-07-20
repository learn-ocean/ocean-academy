import { compare } from 'bcryptjs'

import { ResponseError } from '../../../shared/mongo/ResponseError'

interface MatchPassword {
  (proposedPassword: string, hashedPassword: string): Promise<void>
}

export const matchPassword: MatchPassword = async (proposedPassword, hashedPassword) => {
  const isMatch: boolean = await compare(proposedPassword, hashedPassword)
  if (!isMatch) throw new ResponseError(401, 'Wrong username or password')
}
