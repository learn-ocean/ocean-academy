import { ValidationError } from 'class-validator'
import { ResponseError } from '../shared/mongo/ResponseError'

export const firstError = (errors: ValidationError[]): void => {
  const firstConstraint = errors[0] && errors[0].constraints
  if (firstConstraint) throw new ResponseError(400, firstConstraint[Object.keys(firstConstraint)[0]])
}
