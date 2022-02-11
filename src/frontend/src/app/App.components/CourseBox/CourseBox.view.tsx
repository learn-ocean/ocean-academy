import * as PropTypes from 'prop-types'
import * as React from 'react'

import { ChaptersIconStyled, CourseBoxStyled, CourseStats, StatItem } from './CourseBox.style'

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
    completionTime: number
}


const ChaptersIcon = ({ chaptersImage, noChapters }: ChaptersIconProps) => {
    return (
        <ChaptersIconStyled>
            <img alt="chapters" src={chaptersImage} />
            <p>{noChapters}</p>
        </ChaptersIconStyled>
    )
}

const CompletedIcon = ({ completedImage, showing }: CompletedIconProps) => {
    return (
        <>
            {showing && (
                <img alt="completedIcon" src={completedImage} />
            )}
        </>
    )
}


export const CourseBoxView = ({ title, shortDescription, noChapters, completed, completionTime }: CourseBoxViewProps) => {
    return (
        <CourseBoxStyled>
            <div className={"courseBox"}>
            <div >
            <h3>{title}</h3>
            <div className={"moduleContent"}>
                <p>{shortDescription}</p>
                
            </div>
            </div>
            <CourseStats>
                <StatItem>
                <span className="label">{noChapters} chapters</span>
                </StatItem>
                <StatItem>
                <span className="label">{completionTime} {completionTime == 1 ? "hour" : "hours"} to complete</span>
                </StatItem>
            </CourseStats>
            </div>
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
