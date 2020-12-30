/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from 'pages/Courses/ocean101/Chapters/Chapter9/node_modules/!raw-loader!./course.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import exercise from '!raw-loader!./exercise.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import solution from '!raw-loader!./solution.md'
import { Data } from 'pages/Chapter/Chapter.controller'

export const data: Data = { course, exercise, solution, supports: { }, questions: [] }
