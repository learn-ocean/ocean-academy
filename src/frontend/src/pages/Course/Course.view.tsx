import * as PropTypes from 'prop-types'
import * as React from 'react'
import { CourseStyled } from './Course.style'

type CourseViewProps = {
    course: string
}

export const CourseView = ({ course }: CourseViewProps) => (
    <>
        <CourseStyled>
            <h1>{course} LANDING PAGE: COMING SOON.</h1>
        </CourseStyled>
    </>
)

CourseView.propTypes = {
    course: PropTypes.string
}