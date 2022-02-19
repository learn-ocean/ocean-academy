// prettier-ignore
import {  IsNumber, Min, Matches, IsDate  } from 'class-validator'
import { getModel, Property } from '../../helpers/typegoose'
import { ObjectId } from 'mongodb'

export class Token {
  @Property({ required: true, unique: true, index: true })
  @IsNumber()
  @Min(0)
  tokenId!: number

  @Property({ unique: true })
  @Matches(/^0x([A-Fa-f0-9]{64})$/, { message: 'Not a valid transaction hash' })
  tx?: string

  @IsDate()
  mintedAt?: Date

  @Property()
  userId?: ObjectId
}

export const TokenModel = getModel(Token)
