import { chapterData } from 'pages/Chapter/Chapter.data'
import { PublicUser } from 'shared/user/PublicUser'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'

type DrawerViewProps = {
  showingChapter: boolean
  showingMenu: boolean
  hideCallback: () => void
  pathname: string
  user: PublicUser
  user_drawer: any
  removeAuthUserCallback: () => void
}

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
      <h1>Chapters</h1>
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
  showingMenu: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object,
  user_drawer: PropTypes.object,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
  user: undefined,
}

LoginDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
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
