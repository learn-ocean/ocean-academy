import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { PublicUser } from 'shared/user/PublicUser'
import { SubMenu } from '../SubMenu/SubMenu.controller'

// prettier-ignore
import { HeaderLoggedIn, HeaderContainer, HeaderLoggedOut, HeaderLogo, HeaderMenuItem, HeaderStyled } from "./Header.style";

type HeaderViewProps = {
  user?: PublicUser
  removeAuthUserCallback: () => void
}

const SubMenuItem = () =>{
  return (<HeaderMenuItem>
            <SubMenu options={[
          { name: "Ocean 101", path: "/ocean101/chapter-1" },
          { name: "Intro To Data Defi", path: "/introToDataDefi/chapter-1" },
          { name: "Compute To Data", path: "/ComputeToData/chapter-1" }
        ]} label={"COURSES"} selectCallback={() => {}} />
  </HeaderMenuItem>)
}


// Overall Navbar
export const HeaderView = ({ user, removeAuthUserCallback }: HeaderViewProps) => {
  return (
    <HeaderStyled>

      <Link to="/">
        <HeaderLogo alt="logo" src="/logo.svg" />
      </Link>

      {user ? loggedInHeader({ user, removeAuthUserCallback }) : loggedOutHeader()}

    </HeaderStyled>
  )
}

function loggedOutHeader() {
  return (
    <HeaderLoggedOut>
      <SubMenuItem />
      <Link to="/sign-up">
        <HeaderMenuItem>SIGN UP</HeaderMenuItem>
      </Link>
      <Link to="/about">
        <HeaderMenuItem>ABOUT</HeaderMenuItem>
      </Link>
      <Link to="/login">
        <HeaderMenuItem>LOGIN</HeaderMenuItem>
      </Link>
    </HeaderLoggedOut>
  )
}

function loggedInHeader({ user, removeAuthUserCallback }: HeaderViewProps) {
  return (
    <HeaderLoggedIn>
      <SubMenuItem />
      <Link to={`/user/${user?.username}`}>
        <HeaderMenuItem>{user?.username}</HeaderMenuItem>
      </Link>
      <Link to="/about">
        <HeaderMenuItem>ABOUT</HeaderMenuItem>
      </Link>
      <Link
        to="/"
        onClick={() => {
          removeAuthUserCallback()
        }}
      >
        <HeaderMenuItem>LOGOUT</HeaderMenuItem>
      </Link>
    </HeaderLoggedIn>
  )
}

HeaderView.propTypes = {
  user: PropTypes.object,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

HeaderView.defaultProps = {}
