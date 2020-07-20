import { ObjectId } from 'mongodb'

type upsertedObject = {
  index: number
  _id: ObjectId
}

export interface UpdateRes {
  ok: number
  n: number
  upserted?: upsertedObject[]
  nModified: number
}
