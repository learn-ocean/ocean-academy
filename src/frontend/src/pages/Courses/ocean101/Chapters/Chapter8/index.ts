/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from 'pages/Courses/ocean101/Chapters/Chapter8/node_modules/!raw-loader!./course.md'

import { Data } from '../../../../Chapter/Chapter.controller'
import { questions } from './questions'

export const data: Data = { course, exercise: undefined, solution: undefined, supports: {}, questions }
