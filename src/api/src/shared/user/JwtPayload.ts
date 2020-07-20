import { UserRole } from './UserRole'

export class JwtPayload {
  _id!: string
  username!: string
  userRole?: UserRole
  expiresAt!: Date
}
