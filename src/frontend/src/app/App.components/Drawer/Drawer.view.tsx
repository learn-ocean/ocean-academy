import { courseData } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'
import { ChapterDrawer } from './ChapterDrawer.controller'
import { ShowingChaptersState } from 'reducers/chapterDrawer'

type LoginDrawerViewProps = {
  showingMenu: boolean
  hideCallback: () => void
  pathname: string
  user: PublicUser
  removeAuthUserCallback: () => void
}

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
          </Link>
          <IoIosArrowDroprightCircle onClick={() => changeChapterState(chapterStates, unitModule.path!)} />
          <ChapterDrawer course={unitModule.path!} />
        </DrawerItem>
      ))}
    </DrawerStyled>
  </>
)

export const LoginDrawerView = ({
  showingChapter,
  showingMenu,
  hideCallback,
  pathname,
  user,
  user_drawer,
  removeAuthUserCallback,
}: DrawerViewProps) => (
  <>
    {console.log('LoginDrawerView showing = ', showingMenu)}
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
    {user ?
      loggedInDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }) :
      loggedOutDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback })}
  </>
)

// VIEW FUNCTIONS
function loggedInDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }: LoginDrawerViewProps) {
  console.log("loggedInDrawer showing = ", showingMenu)
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

function loggedOutDrawer({ showingMenu, hideCallback, pathname, user, removeAuthUserCallback }: LoginDrawerViewProps) {
  console.log("loggedOutDrawer showing = ", showingMenu)
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

CourseDrawerView.propTypes = {
  showingCourses: PropTypes.bool,
  chapterStates: PropTypes.object,
  hideCallback: PropTypes.func.isRequired,
  changeChapterState: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired
}

CourseDrawerView.defaultProps = {
  showingCourses: false,
}

LoginDrawerView.propTypes = {
  showingMenu: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object,
  user_drawer: PropTypes.object,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

LoginDrawerView.defaultProps = {
  showingMenu: false,
  user: undefined,
}
