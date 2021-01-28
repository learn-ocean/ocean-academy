import * as PropTypes from 'prop-types'
import * as React from 'react'

import { ChaptersIconStyled, CourseBoxStyled } from './CourseBox.style'

type ChaptersIconProps = {
    chaptersImage: string
    noChapters: number
}

type CompletedIconProps = {
    completedImage: string
    showing: boolean
}

export type CourseBoxViewProps = {
    title: string
    shortDescription: string
    noChapters: number
    completed: boolean
}


const ChaptersIcon = ( { chaptersImage, noChapters } : ChaptersIconProps) => {
    return (
        <ChaptersIconStyled>
            <img alt="chapters" src={chaptersImage} />
            <p>{noChapters}</p>
        </ChaptersIconStyled>
    )
}

const CompletedIcon = ( { completedImage, showing }: CompletedIconProps ) => {
    return (
        <>
        {showing && (
            <img alt="completedIcon" src={completedImage} />
        )}
        </>
    )
}


export const CourseBoxView = ( {title, shortDescription, noChapters, completed}: CourseBoxViewProps) => {
    return (
        <CourseBoxStyled>
            <h3>{title}</h3>
            <p>{shortDescription}</p> 
            <ChaptersIcon
                chaptersImage={"./Chapters.svg"}
                noChapters={noChapters}
            />
            <CompletedIcon
                completedImage={"./Checkmark.svg"}
                showing={completed}
            />
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