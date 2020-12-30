// import { courseData } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'
import { Select } from '../Select/Select.controller'


type ChapterDrawerViewProps = {
  showingChapters: boolean
  hideCallback: () => void
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

<<<<<<< Updated upstream
export const ChapterDrawerView = ({
  showingChapter,
  showingMenu,
  hideCallback,
  pathname,
  user_drawer,
  removeAuthUserCallback,
}: DrawerViewProps) => (
  <>
    {console.log('ChapterDrawerView showing = ', showingChapter)}
    <DrawerMask className={`${showingChapter}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapter}`}>
=======
type LoggedOutDrawerViewProps = {
  showingMenu: boolean
}

export const ChapterDrawerView = ({ showingChapters, hideCallback, pathname }: ChapterDrawerViewProps) => (
  <>
    {console.log("ChapterDrawerView showing = ", showingChapters)}
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
>>>>>>> Stashed changes
      <h1>Chapters</h1>
      <Select

      />
      {chapterData.map((chapter) => (
        <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
          <Link to={chapter.pathname} onClick={() => hideCallback()}>
            {chapter.name}
          </Link>
        </DrawerItem>
      ))}
    </DrawerStyled>
  </>
)

<<<<<<< Updated upstream
export const LoginDrawerView = ({
  showingChapter,
  showingMenu,
  hideCallback,
  pathname,
  user,
  user_drawer,
  removeAuthUserCallback,
}: DrawerViewProps) => (
=======
export const LoginDrawerView = ({ showingMenu, user, hideCallback, removeAuthUserCallback }: LoginDrawerViewProps) => (
>>>>>>> Stashed changes
  <>
    {console.log('LoginDrawerView showing = ', showingMenu)}
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
<<<<<<< Updated upstream
    {user
      ? loggedInDrawer({
          showingChapter,
          showingMenu,
          hideCallback,
          pathname,
          user,
          user_drawer,
          removeAuthUserCallback,
        })
      : loggedOutDrawer({
          showingChapter,
          showingMenu,
          hideCallback,
          pathname,
          user,
          user_drawer,
          removeAuthUserCallback,
        })}
  </>
)

function loggedInDrawer({
  showingChapter,
  showingMenu,
  hideCallback,
  pathname,
  user,
  user_drawer,
  removeAuthUserCallback,
}: DrawerViewProps) {
  console.log('loggedInDrawer showing = ', showingMenu)
=======
    {user ?
      loggedInDrawer({ showingMenu, user, removeAuthUserCallback }) :
      loggedOutDrawer({ showingMenu })}
  </>
)

function loggedInDrawer({ showingMenu, user, removeAuthUserCallback }: LoggedInDrawerViewProps) {
  console.log("loggedInDrawer showing = ", showingMenu)
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
function loggedOutDrawer({
  showingChapter,
  showingMenu,
  hideCallback,
  pathname,
  user,
  user_drawer,
  removeAuthUserCallback,
}: DrawerViewProps) {
  console.log('loggedOutDrawer showing = ', showingMenu)
=======
function loggedOutDrawer({ showingMenu }: LoggedOutDrawerViewProps) {
  console.log("loggedOutDrawer showing = ", showingMenu)
>>>>>>> Stashed changes
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
