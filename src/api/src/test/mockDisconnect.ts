import * as mongoose from 'mongoose'

export const mockDisconnect = async (): Promise<void> => {
  await mongoose.disconnect()
}
