import * as mongoose from 'mongoose'

export const mockConnect = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
  })
}
