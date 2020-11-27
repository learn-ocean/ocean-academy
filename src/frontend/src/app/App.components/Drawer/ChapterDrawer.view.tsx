import * as PropTypes from 'prop-types'
import * as React from 'react'

// bandaid solution
import { chapterData } from '../../../pages/Courses/ocean101/Chapters/Chapters.data'
import { ChapterWrapper, DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'
import { Link } from 'react-router-dom'

type ChapterDrawerViewProps = {
    showingChapter: boolean
    currentCourse: string
    hideCallback: (showingChapter: boolean, currentCourse: string) => void
    pathname: string
}

// Subdrawer of CourseDrawerView
export const ChapterDrawerView = ({ showingChapter, currentCourse, hideCallback, pathname }: ChapterDrawerViewProps) => (
    <>
        {console.log(`[Drawer.view.tsx] showingChapter = ${showingChapter}`)}
        <DrawerMask className={`${showingChapter}`} onClick={() => hideCallback(showingChapter, currentCourse)} />
        <DrawerStyled className={`${showingChapter}`}>
            <h1>Chapters</h1>
            {chapterData.map((chapter) => (
                <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
                    <Link to={chapter.pathname} onClick={() => hideCallback(showingChapter, currentCourse)}>
                        {chapter.name}
                    </Link>
                </DrawerItem>
            ))}
        </DrawerStyled>
    </>
)

ChapterDrawerView.propTypes = {
    showingChapter: PropTypes.bool,
    currentCourse: PropTypes.string.isRequired,
    hideCallback: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
}

ChapterDrawerView.defaultProps = {
    showingChapter: false,
}