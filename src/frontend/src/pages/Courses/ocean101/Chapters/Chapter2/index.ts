/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from '!raw-loader!./course.md'

import { Data } from '../../../../Chapter/Chapter.controller'
import { questions } from './questions'

<<<<<<< HEAD
export const data: Data = { course, exercise: undefined, solution: undefined, supports: {}, questions }
=======
export const data: Data = { 
    course, 
    exercise: undefined, 
    solution: undefined, 
    supports: {}, 
    questions 
}
>>>>>>> Add-ITDF
