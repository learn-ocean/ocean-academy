import * as PropTypes from 'prop-types'
import * as React from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

import { CategoryArray, categoryOptions, ChapterDataDictionary, chaptersByCourse, courseCategoriesData, courseCategoriesDictionaries } from '../../../pages/Course/Course.data'
import { Select } from '../Select/Select.controller'
import { Option } from '../Select/Select.view'
import { DrawerChapter, DrawerChapters, DrawerCourseTitle, DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin, OpenedIcon } from './Drawer.style'

type ChapterDrawerViewProps = {
  showingChapters: boolean
  currentCourse: string
  pathname: string
  activeCourseCategory: Option
  hideCallback: () => void
  changeCategoryCallback: (e: Option) => void
  changeChapterState: (course: string) => void
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


export const ChapterDrawerView = ({ showingChapters, currentCourse, pathname, activeCourseCategory, hideCallback, changeCategoryCallback, changeChapterState }: ChapterDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
      <h1>Chapters</h1>

      <Select
        options={categoryOptions}
        defaultOption={activeCourseCategory}
        selectCallback={(e) => changeCategoryCallback(e)}
      />

      {courseCategoriesDictionaries[activeCourseCategory.name].map((course: ChapterDataDictionary) => {
        return (
          <>
          <DrawerCourseTitle>
            <p>{courseCategoriesData[activeCourseCategory.name][course.name].title}</p>
            <OpenedIcon>
              {currentCourse === courseCategoriesData[activeCourseCategory.name][course.name].path ? (
                  <IoIosArrowDropdownCircle onClick={() => changeChapterState(courseCategoriesData[activeCourseCategory.name][course.name].path)} /> 
                ) : (
                  <IoIosArrowDroprightCircle onClick={() => changeChapterState(courseCategoriesData[activeCourseCategory.name][course.name].path)} /> 
                )
              }
            </OpenedIcon>
          </DrawerCourseTitle>

          <DrawerChapters>
            {currentCourse === courseCategoriesData[activeCourseCategory.name][course.name].path && (
              <DrawerChapter>
                {course.data.map((chapter: any) => (
                  <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
                    <Link to={chapter.pathname} onClick={() => hideCallback()}>
                      {chapter.name}
                    </Link>
                  </DrawerItem>
                ))}
              </DrawerChapter>
            )}
          </DrawerChapters>
          </>
        )
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
  currentCourse: PropTypes.string,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCategoryCallback: PropTypes.func.isRequired,
  activeCourseCategory: PropTypes.object.isRequired,
  changeChapterState: PropTypes.object.isRequired
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
  currentCourse: 'none'
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
