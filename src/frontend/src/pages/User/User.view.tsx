import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { ChapterData } from 'pages/Chapter/Chapter.controller'
// import { courseData } from 'pages/Course/Course.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'
//Helpers
import { isCourseCompleted } from 'helpers/courses'
import {COURSES} from 'helpers/courses'
//Chapters
import { chapterData as ComputeToData } from '../Courses/ComputeToData/Chapters/Chapters.data'
import { chapterData as chapterDataDefi } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { chapterData } from '../Courses/ocean101/Chapters/Chapters.data'
// prettier-ignore
import { 
  UserBadge, UserBadgeButtons, UserBadgeInput, UserCard, UserChapter, 
  UserProgress, UserStyled, UserTitle, UserTitle2,CertificateContainer 
} from './User.style'

type UserViewProps = {
  loading: boolean
  user: PublicUser
  authUser?: PublicUser
  downloadCallback: (courseTitle: string) => void
  getCertificateCallback: () => void
  name: string
  setName: (e: string) => void
}

export const UserView = ({
  loading,
  user,
  authUser,
  downloadCallback,
  name,
  setName,
  getCertificateCallback,
}: UserViewProps) => {
  const ocean101Unlocked =  user.progress ? isCourseCompleted(COURSES.OCEAN_101, user.progress) : false
  const dataDefiUnlocked =  user.progress ? isCourseCompleted(COURSES.INTRO_TO_DATA_DEFI, user.progress) : false
  const computeToDataUnlocked =  user.progress ? isCourseCompleted(COURSES.COMPUTE_TO_DATA, user.progress) : false


  return (
    <UserStyled>
     
      <UserTitle2>
        <h1>Your progress for Ocean101:</h1>
      </UserTitle2>
      <CertificateContainer>
          <CertificateView 
          badgeUnlocked={ocean101Unlocked}
          courseTitle={COURSES.OCEAN_101.title}
          setName={setName} 
          loading={loading} 
          authUser={authUser} 
          name={name} 
          getCertificateCallback={getCertificateCallback}
          downloadCallback={downloadCallback}
          user={user}
          
          />
     </CertificateContainer>
      <UserCard>
        <UserProgress>
          {chapterData.map((chapter: ChapterData) => {
            const done = user.progress && (user.progress.indexOf(chapter.pathname) >= 0 || user.progress.indexOf(chapter.pathname.replace("/ocean101", "")) >= 0)

            return (
              <Link to={chapter.pathname}>

                <UserChapter key={chapter.pathname} done={done}>
                  {chapter.name}
                  {done && <img alt="done" src="/icons/check.svg" />}
                </UserChapter>
              </Link>
            )
          })}
        </UserProgress>
      </UserCard>

      <UserTitle2>
        <h1>Your progress for Data DeFi:</h1>
      </UserTitle2>
      <CertificateContainer>
          <CertificateView badgeUnlocked={dataDefiUnlocked}
          setName={setName} 
          courseTitle={COURSES.INTRO_TO_DATA_DEFI.title}
          loading={loading} 
          authUser={authUser} 
          name={name} 
          getCertificateCallback={getCertificateCallback}
          downloadCallback={downloadCallback}
          user={user}
          />
      </CertificateContainer>
      <UserCard>
        <UserProgress>
          {chapterDataDefi.map((chapter: ChapterData) => {
            const done = user.progress && user.progress.indexOf(chapter.pathname) >= 0
            return (
              <Link to={chapter.pathname}>
                <UserChapter key={chapter.pathname} done={done}>
                  {chapter.name}
                  {done && <img alt="done" src="/icons/check.svg" />}
                </UserChapter>
              </Link>
            )
          })}
        </UserProgress>
      </UserCard>

      <UserTitle2>
        <h1>Your progress for ComputeToData:</h1>
      </UserTitle2>
      <CertificateContainer>
          <CertificateView badgeUnlocked={computeToDataUnlocked}
          courseTitle={COURSES.COMPUTE_TO_DATA.title}
          setName={setName} 
          loading={loading} 
          authUser={authUser} 
          name={name} 
          getCertificateCallback={getCertificateCallback}
          downloadCallback={downloadCallback}
          user={user}
          />
      </CertificateContainer>
      <UserCard>
        <UserProgress>
          {ComputeToData.map((chapter: ChapterData) => {
            const done = user.progress && user.progress.indexOf(chapter.pathname) >= 0
            return (
              <Link to={chapter.pathname}>
                <UserChapter key={chapter.pathname} done={done}>
                  {chapter.name}
                  {done && <img alt="done" src="/icons/check.svg" />}
                </UserChapter>
              </Link>
            )
          })}
        </UserProgress>
      </UserCard>
    </UserStyled>
  )
}


UserView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
}

UserView.defaultProps = {
  loading: false,
  user: {
    username: 'Not found',
    karmaTotal: 0,
  },
}

interface CertificateViewProps {
  badgeUnlocked: boolean
  loading: boolean
  user: PublicUser
  authUser?: PublicUser
  downloadCallback: (courseTitle: string) => void
  getCertificateCallback: () => void
  name: string
  setName: (e: string) => void
  courseTitle: string
}

const CertificateView = (props: CertificateViewProps) => {
  return(
<UserCard>
<UserBadge badgeUnlocked={props.badgeUnlocked}>
  {props.badgeUnlocked ? (
    <>
      <h2>Congrats! You have finished the course. Enter your name below in order to get your certificate!</h2>
      {props.authUser?.name ? (
        <UserBadgeButtons>
          <Button
            type="button"
            text="Download PDF certificate"
            icon="download"
            loading={props.loading}
            onClick={() => props.downloadCallback(props.courseTitle)}
          />
          <Link to={`/certificates/${props.user.username}/${props.courseTitle}`}>
            <Button type="button" text="Certified URL" icon="link" loading={props.loading} onClick={() => { }} />
          </Link>
          <Link to={`/token/${props.user.username}/${props.courseTitle}`}>
            <Button
              type="button"
              text="NFT certificate"
              icon="wallet"
              loading={props.loading}
              onClick={() => { }}
            />
          </Link>
        </UserBadgeButtons>
      ) : (
        <UserBadgeInput>
          <Input
            icon="user"
            name="name"
            placeholder="Name on certificate"
            type="text"
            onChange={(e) => {
              props.setName(e.target.value)
            }}
            value={props.name}
            onBlur={() => { }}
            inputStatus={undefined}
            errorMessage={undefined}
          />
          <Button
            type="button"
            text="Get certificate"
            icon="login"
            loading={props.loading}
            onClick={() => props.getCertificateCallback()}
          />
        </UserBadgeInput>
      )}
    </>
  ) : (
    <p>To obtain the completion certificate, you need to complete all chapters.</p>
  )}
</UserBadge>
</UserCard>
  )}
