import * as PropTypes from 'prop-types'
import * as React from 'react'

import { CourseBoxStyled } from './CourseBox.style'

export type CourseBoxViewProps = {
    title: string
    shortDescription: string
}

export const CourseBoxView = ( {title, shortDescription}: CourseBoxViewProps) => {
    
    return (
        <CourseBoxStyled>
            <h3>{title}</h3>
            <p>{shortDescription}</p> 
        </CourseBoxStyled>
    )
}

CourseBoxView.propTypes = {
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired
}

CourseBoxView.defaultProps = {
    title: '[Please add a title]',
    shortDescription: '[Please add a description]'    
}