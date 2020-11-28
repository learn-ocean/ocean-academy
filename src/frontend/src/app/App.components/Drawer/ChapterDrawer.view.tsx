import * as PropTypes from 'prop-types'
import * as React from 'react'

// bandaid solution
// Need to import them all... as an object?
// then we check "thisCourse" and pull out the corresponding one.
import { chapterData } from '../../../pages/Courses/ocean101/Chapters/Chapters.data'
import { chaptersByCourse } from 'pages/Course/Course.data'
import { ChapterData } from '../../../pages/Course/Course.controller'

import { DrawerItem } from './Drawer.style'
import { ChaptersWrapper } from './ChapterDrawer.style'
import { Link } from 'react-router-dom'
import { ShowingChaptersState } from 'reducers/chapterDrawer'

type ChapterDrawerViewProps = {
    course: string
    chapterStates: ShowingChaptersState
    hideCallback: (chapterStates: ShowingChaptersState, currentCourse: string) => void
    pathname: string
}

// Subdrawer of CourseDrawerView
// hideCallback
export const ChapterDrawerView = ({ course, chapterStates, hideCallback, pathname }: ChapterDrawerViewProps) => (
    <>
        {console.log(`[Drawer.view.tsx] course = ${course}\nchapterStates.course = ${chapterStates[course]}`)}
        <ChaptersWrapper className={`${chapterStates[course]}`}>
            <h5>{course} Chapters</h5>
            {chaptersByCourse[course].map((chapter: ChapterData) => (
                <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
                    <Link to={chapter.pathname} onClick={() => hideCallback(chapterStates, course)}>
                        {chapter.name}
                    </Link>
                </DrawerItem>
            ))}
        </ChaptersWrapper>
    </>
)

ChapterDrawerView.propTypes = {
    course: PropTypes.string,
    chapterStates: PropTypes.object,
    hideCallback: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
}

ChapterDrawerView.defaultProps = {
    showingChapter: false,
}