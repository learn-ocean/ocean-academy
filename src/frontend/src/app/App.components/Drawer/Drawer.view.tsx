<<<<<<< HEAD
import { courseData } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
=======
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
// import { PublicUser } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'
>>>>>>> Add-ITDF

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse } from '../../../pages/Course/Course.data'
// PLACEHOLDER.
// Use Select menu to choose the  
import { chapterData } from '../../../pages/Courses/ocean101/Chapters/Chapters.data'
import { Select } from '../Select/Select.controller'
import { Option } from '../Select/Select.view'
import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'
import { ChapterDrawer } from './ChapterDrawer.controller'
import { ShowingChaptersState } from 'reducers/chapterDrawer'

<<<<<<< HEAD
type LoginDrawerViewProps = {
  showingMenu: boolean
=======
type ChapterDrawerViewProps = {
  showingChapters: boolean
>>>>>>> Add-ITDF
  hideCallback: () => void
  pathname: string
  changeCourseCallback: (e: Option) => void
  activeCourse: Option
}

type LoginDrawerViewProps = {
  showingMenu: boolean
  user: PublicUser
  hideCallback: () => void
  removeAuthUserCallback: () => void
}

type LoggedInDrawerViewProps = {
  showingMenu: boolean
  user: PublicUser
  removeAuthUserCallback: () => void
}

<<<<<<< HEAD
type CourseDrawerViewProps = {
  showingCourses: boolean
  chapterStates: ShowingChaptersState
  hideCallback: () => void
  changeChapterState: (chapterStates: ShowingChaptersState, course: string) => void
  pathname: string
}

export const CourseDrawerView = ({ showingCourses, chapterStates, hideCallback, changeChapterState, pathname }: CourseDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingCourses}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingCourses}`}>
      <h1>Modules</h1>
      {courseData.map((unitModule) => (
        <DrawerItem key={unitModule.pathname} className={pathname === unitModule.pathname ? 'current-path' : 'other-path'}>
          <Link to={unitModule.pathname} onClick={() => hideCallback()}>
            {unitModule.name}
=======
type LoggedOutDrawerViewProps = {
  showingMenu: boolean
}

export const ChapterDrawerView = ({ showingChapters, hideCallback, pathname, activeCourse, changeCourseCallback }: ChapterDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
      <h1>Chapters</h1>

      <Select
        options={[
          { name: "Ocean101", path: "ocean101" },
          { name: "Intro to Data Defi", path: "introToDataDefi" }
        ]}
        defaultOption={activeCourse}
        selectCallback={(e) => changeCourseCallback(e)}
      />

      {chaptersByCourse[activeCourse.path].map((chapter: ChapterData) => (
        <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
          <Link to={chapter.pathname} onClick={() => hideCallback()}>
            {chapter.name}
>>>>>>> Add-ITDF
          </Link>
          <IoIosArrowDroprightCircle onClick={() => changeChapterState(chapterStates, unitModule.path!)} />
          <ChapterDrawer course={unitModule.path!} />
        </DrawerItem>
      ))}
    </DrawerStyled>
  </>
)

export const LoginDrawerView = ({ showingMenu, user, hideCallback, removeAuthUserCallback }: LoginDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
    {user ?
<<<<<<< HEAD
      loggedInDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }) :
      loggedOutDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback })}
  </>
)

// VIEW FUNCTIONS
function loggedInDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }: LoginDrawerViewProps) {
  console.log("loggedInDrawer showing = ", showingMenu)
=======
      loggedInDrawer({ showingMenu, user, removeAuthUserCallback }) :
      loggedOutDrawer({ showingMenu })}
  </>
)

function loggedInDrawer({ showingMenu, user, removeAuthUserCallback }: LoggedInDrawerViewProps) {
>>>>>>> Add-ITDF
  return (
    <DrawerStyledLogin className={`${showingMenu}`}>
      <h1>Menu</h1>
      <DrawerItem>
        <Link to="/about">ABOUT US</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/terms">TERMS</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to={`/user/${user?.username}`}>{user?.username}</Link>
      </DrawerItem>

      <DrawerItem>
        <Link
          to="/"
          onClick={() => {
            removeAuthUserCallback()
          }}
        >
          LOGOUT
        </Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

<<<<<<< HEAD
function loggedOutDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }: LoginDrawerViewProps) {
  console.log("loggedOutDrawer showing = ", showingMenu)
=======
function loggedOutDrawer({ showingMenu }: LoggedOutDrawerViewProps) {
>>>>>>> Add-ITDF
  return (
    <DrawerStyledLogin className={`${showingMenu}`}>
      <h1>Menu</h1>
      <DrawerItem>
        <Link to="/about">ABOUT US</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/terms">TERMS</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/sign-up">SIGN UP</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/login">LOGIN</Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

<<<<<<< HEAD
CourseDrawerView.propTypes = {
  showingCourses: PropTypes.bool,
  chapterStates: PropTypes.object,
  hideCallback: PropTypes.func.isRequired,
  changeChapterState: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired
}

CourseDrawerView.defaultProps = {
  showingCourses: false,
=======
ChapterDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCourseCallback: PropTypes.func.isRequired,
  activeCourse: PropTypes.string.isRequired
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
>>>>>>> Add-ITDF
}

LoginDrawerView.propTypes = {
  showingMenu: PropTypes.bool,
  user: PropTypes.object,
  hideCallback: PropTypes.func.isRequired,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

LoginDrawerView.defaultProps = {
  showingMenu: false,
  user: undefined,
}
