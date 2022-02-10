import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import {useState} from  'react';
// import { PublicUser } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse } from '../../../pages/Course/Course.data'
// PLACEHOLDER.
// Use Select menu to choose the  
// import { Select } from '../../../pages/Courses/ocean101/Chapters/Chapters.data'
import { Select } from '../Select/Select.controller'
import { Option } from '../Select/Select.view'
import { DrawerItem,DrawerItens, DrawerTitle, DrawerSubMenuLabel, DrawerSubMenu, DrawerSubMenuItem,  DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'
import { SubMenu } from '../SubMenu/SubMenu.controller'


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

export const ChapterDrawerView = ({ showingChapters, hideCallback, pathname, changeCourseCallback, activeCourse }: ChapterDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
      <h1>Chapters</h1>

      <Select
        options={[
          { name: "Ocean101", path: "ocean101" },
          { name: "Intro to Data Defi", path: "introToDataDefi" },
          { name: "Compute-To-Data", path: "ComputeToData" }
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

export const LoginDrawerView = ({ showingMenu, user, hideCallback, removeAuthUserCallback }: LoginDrawerViewProps) => {
  const [isCoursesMenu, setCoursesMenu] = useState<boolean>(false);

  const coursesSubMenu = () => (
    <>
    <DrawerTitle>
    <img onClick={() => setCoursesMenu(!isCoursesMenu)} className={"backIcon"} src="/icons/chevron-forward-outline.svg" />
    </DrawerTitle>

    <DrawerItens>

          <DrawerItem >
            <Link to="/ocean101">OCEAN 101</Link>
          </DrawerItem>
          <DrawerItem >
            <Link to="/introToDataDefi">INTRO TO DATA DEFI</Link>
          </DrawerItem>
          <DrawerItem >
            <Link to="/computeToData">COMPUTE TO DATA</Link>
          </DrawerItem>
          </DrawerItens>
          </>
  )

  const mainMenu = () => (
    <>
        <DrawerTitle>Menu</DrawerTitle>
        <DrawerItens>
        <DrawerSubMenu>
          <DrawerSubMenuLabel onClick={() => setCoursesMenu(!isCoursesMenu)}> 
              COURSES<img className={"forwardIcon"} src="/icons/chevron-forward-outline.svg" />
          </DrawerSubMenuLabel>
      </DrawerSubMenu>
      <DrawerItem >
            <Link to="/about">ABOUT</Link>
          </DrawerItem>
          <DrawerItem>
            <Link to={`/user/${user?.username}`}>{user?.username.toUpperCase()}</Link>
          </DrawerItem>
          {!user ?       (<><DrawerItem>
        <Link to="/sign-up">SIGN UP</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/login">LOGIN</Link>
      </DrawerItem></>) :            (<DrawerItem>
            <Link
              to="/"
              onClick={() => {
                removeAuthUserCallback()
              }}
            >
              LOGOUT
            </Link>
          </DrawerItem>)
          }
        </DrawerItens>
    </>
  )


  return(
    <>
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
      <DrawerStyledLogin className={`${showingMenu}`}>
        {!isCoursesMenu ? mainMenu() : coursesSubMenu()}
        </DrawerStyledLogin>
    </>
  )

}
    


ChapterDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCourseCallback: PropTypes.func.isRequired,
  activeCourse: PropTypes.object.isRequired
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
