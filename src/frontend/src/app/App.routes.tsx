import React from 'react'
import { Route, Switch, Redirect , useParams} from 'react-router-dom'
import { About } from 'pages/About/About.controller'
import { Certificate } from 'pages/Certificate/Certificate.controller'
import { ChangePassword } from 'pages/ChangePassword/ChangePassword.controller'
import { Chapter } from 'pages/Chapter/Chapter.controller'
import { Courses } from 'pages/Courses/Courses.controller'
import { Error404 } from 'pages/Error404/Error404.controller'
import { ForgotPassword } from 'pages/ForgotPassword/ForgotPassword.controller'
import { Home } from 'pages/Home/Home.controller'
import { Login } from 'pages/Login/Login.controller'
import { ResetPassword } from 'pages/ResetPassword/ResetPassword.controller'
import { SignUp } from 'pages/SignUp/SignUp.controller'
import { Terms } from 'pages/Terms/Terms.controller'
import { Token } from 'pages/Token/Token.controller'
import { User } from 'pages/User/User.controller'
import { Referral } from "pages/Referral/Referral.controller"
import { EmailVerification } from 'pages/EmailVerification/EmailVerification.controller'
import { Ocean101Course, IntroToDataDefiCourse, ComputeToDataCourse } from 'pages/Course/Course.controller'
 
export const AppRoutes = ({ location }: any) => (
  <Switch location={location}>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/sign-up">
      <SignUp />
    </Route>
    <Route exact path="/referral/:referral?">
      <SignUp />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/referral-program">
      <Referral />
    </Route>
    <Route exact path="/verify-email">
      <EmailVerification />
    </Route>
    <Route exact path="/forgot-password">
      <ForgotPassword />
    </Route>
    <Route exact path="/reset-password/:token">
      <ResetPassword />
    </Route>
    <Route exact path="/change-password">
      <ChangePassword />
    </Route>
    <Route path="/browse-courses">
      <Courses />
    </Route>
    <Route exact path="/ocean101">
      <Ocean101Course />
    </Route>
    <Route exact path="/introToDataDefi">
      <IntroToDataDefiCourse />
    </Route>
    <Route exact path="/ComputeToData">
      <ComputeToDataCourse />
    </Route>
    <Route path="/*/chapter-*">
      <Chapter />
    </Route>
    <Route exact path="/user/:username">
      <User />
    </Route>
    <Route exact path="/certificates/:username/:course">
      <Certificate />
    </Route>
    <Route exact path="/token/:username/:course">
      <Token />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/terms">
      <Terms />
    </Route>
    <Route exact path="/page-not-found">
      <Error404 />
    </Route>
    <Route>
      <Error404 />
    </Route>
  </Switch>
)
