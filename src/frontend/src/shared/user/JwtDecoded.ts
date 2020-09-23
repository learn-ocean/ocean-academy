import { JwtPayload } from './JwtPayload'

export class JwtDecoded extends JwtPayload {
  iat!: number
  exp!: number
  aud!: string
  iss!: string
  sub!: string
}
