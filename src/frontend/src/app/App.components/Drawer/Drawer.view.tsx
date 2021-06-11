import * as PropTypes from 'prop-types'
import * as React from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse, courseCategoriesData, categoryOptions, courseCategoriesDictionaries, CategoryArray } from '../../../pages/Course/Course.data'
import { Select } from '../Select/Select.controller'
import { Option } from '../Select/Select.view'
import { ChapterDrawer } from './Drawer.controller'
import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'

type ChapterDrawerViewProps = {
  showingChapters: boolean
  hideCallback: () => void
  pathname: string
  changeCategoryCallback: (e: Option) => void
  activeCourseCategory: Option
}

type CourseDrawerViewProps = {
  currentCategory: string
  showingCourses: boolean
  hideCallback: () => void
  changeChapterState: (course: string) => void
  pathname: string
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


export const ChapterDrawerView = ({ showingChapters, hideCallback, pathname, changeCategoryCallback, activeCourseCategory }: ChapterDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
      <h1>Chapters</h1>

      <Select
        options={categoryOptions}
        defaultOption={activeCourseCategory}
        selectCallback={(e) => changeCategoryCallback(e)}
      />

      {courseCategoriesDictionaries[activeCourseCategory.name].map((course: CategoryArray) => {
        return (
          course.data.map((chapter: any) => (
            <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
              <Link to={chapter.pathname} onClick={() => hideCallback()}>
                {chapter.name}
              </Link>
            </DrawerItem>
          )
        ))
      })}
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

export const CourseDrawerView = ({ currentCategory, showingCourses, hideCallback, changeChapterState, pathname }: CourseDrawerViewProps) => (
  <>
    {console.log("CourseDrawerView showing = ", showingCourses)}
    <DrawerMask className={`${showingCourses}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingCourses}`}>
      <h1>Modules</h1>
      {courseCategoriesData[currentCategory].map((unitModule) => (
        <DrawerItem key={unitModule.pathname} className={pathname === unitModule.pathname ? 'current-path' : 'other-path'}>
          <Link to={unitModule.pathname} onClick={() => hideCallback()}>
            {unitModule.name}
          </Link>
          <IoIosArrowDroprightCircle onClick={() => changeChapterState(unitModule.path!)} />
          <ChapterDrawer />
        </DrawerItem>
      ))}
    </DrawerStyled>
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
  changeCategoryCallback: PropTypes.func.isRequired,
  activeCourseCategory: PropTypes.object.isRequired
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
}

CourseDrawerView.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  showingCourses: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  changeChapterState: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired
}

CourseDrawerView.defaultProps = {
  currentCategory: 'category 1',
  showingCourses: false,
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
