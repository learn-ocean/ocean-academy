import { chapterData } from 'pages/Chapter/Chapter.data'
import { PublicUser } from 'shared/user/PublicUser'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'

type DrawerViewProps = {
  showing: boolean
  hideCallback: () => void
  pathname: string
  user_drawer: any
  removeAuthUserCallback_drawer: () => void
}

type HeaderViewProps = {
  user_header?: PublicUser
  removeAuthUserCallback_header: () => void
}

export const ChapterDrawerView = ({ showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer }: DrawerViewProps) => (
  <>
    <DrawerMask className={`${showing}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showing}`}>
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

export const LoginDrawerView = ({ user_header, removeAuthUserCallback_header }: HeaderViewProps,
  { showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer }: DrawerViewProps) => (
    <>
      <DrawerMask className={`${showing}`} onClick={() => hideCallback()} />
      {user_header ? loggedInDrawer({ user_header, removeAuthUserCallback_header }, { showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer }) : loggedOutDrawer({ showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer })}
    </>
  )

function loggedInDrawer({ user_header, removeAuthUserCallback_header }: HeaderViewProps,
  { showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer }: DrawerViewProps) {
  return (
    <DrawerStyledLogin className={`${showing}`}>
      <h1>Menu</h1>
      <DrawerItem>
        <Link to="/about">
          ABOUT US
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/terms">
          TERMS
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link to={`/user/${user_header?.username}`}>
          {user_header?.username}
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link
          to="/"
          onClick={() => {
            removeAuthUserCallback_header()
          }}
        >
          LOGOUT
        </Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

function loggedOutDrawer({ showing, hideCallback, pathname, user_drawer, removeAuthUserCallback_drawer }: DrawerViewProps) {
  return (
    <DrawerStyledLogin className={`${showing}`}>
      <h1>User Menu</h1>
      <DrawerItem>
        <Link to="/about">
          ABOUT US
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/terms">
          TERMS
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/sign-up">
          SIGN UP
        </Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/login">
          LOGIN
        </Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

ChapterDrawerView.propTypes = {
  showing: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  user_drawer: PropTypes.object,
  removeAuthUserCallback_drawer: PropTypes.func.isRequired,
}

ChapterDrawerView.defaultProps = {
  showing: false,
  user: undefined,
}

LoginDrawerView.propTypes = {
  user_header: PropTypes.object,
  removeAuthUserCallback_header: PropTypes.func.isRequired,
  showing: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  user_drawer: PropTypes.object,
  removeAuthUserCallback_drawer: PropTypes.func.isRequired
}

LoginDrawerView.defaultProps = {
  showing: false,
  user: undefined,
}
