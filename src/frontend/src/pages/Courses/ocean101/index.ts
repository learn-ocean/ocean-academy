/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import data from '!raw-loader!./module.md'

import { Course } from '../../Course/Course.controller'

<<<<<<< HEAD
export const course: Course = { path: "ocean101", description: data }
=======
export const course: Course = { 
    path: "ocean101", 
    description: data 
}
>>>>>>> Add-ITDF