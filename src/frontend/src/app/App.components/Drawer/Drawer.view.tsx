import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
// import { PublicUser } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse } from '../../../pages/Course/Course.data'
// PLACEHOLDER.
// Use Select menu to choose the  
// import { chapterData } from '../../../pages/Courses/ocean101/Chapters/Chapters.data'
import { Select } from '../Select/Select.controller'
import { Option } from '../Select/Select.view'
import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'

type ChapterDrawerViewProps = {
  showingChapters: boolean
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
          </Link>
        </DrawerItem>
      ))}
    </DrawerStyled>
  </>
)

export const LoginDrawerView = ({ showingMenu, user, hideCallback, removeAuthUserCallback }: LoginDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
    {user ?
      loggedInDrawer({ showingMenu, user, removeAuthUserCallback }) :
      loggedOutDrawer({ showingMenu })}
  </>
)

function loggedInDrawer({ showingMenu, user, removeAuthUserCallback }: LoggedInDrawerViewProps) {
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

function loggedOutDrawer({ showingMenu }: LoggedOutDrawerViewProps) {
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

ChapterDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCourseCallback: PropTypes.func.isRequired,
  activeCourse: PropTypes.string.isRequired
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
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
