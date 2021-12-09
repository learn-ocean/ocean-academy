import { Length, IsIn } from 'class-validator'
import { Expose } from 'class-transformer'
import { coursesTitles } from '../../helpers/courses'

export class RequestTokenIdInputs {
  @Expose()
  @Length(2, 20)
  @IsIn(coursesTitles, { message: 'Is not a valid course' })
  course!: string
}

export class RequestTokenIdOutputs {
  tokenId!: number
}
