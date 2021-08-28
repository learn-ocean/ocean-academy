import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { ChapterData } from 'pages/Chapter/Chapter.controller'
// import { courseData } from 'pages/Course/Course.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

import { chapterData as ComputeToData } from '../Courses/ComputeToData/Chapters/Chapters.data'
import { chapterData as chapterDataDefi } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { chapterData } from '../Courses/ocean101/Chapters/Chapters.data'
// prettier-ignore
import { UserBadge, UserBadgeButtons, UserBadgeInput, UserCard, UserChapter, UserProgress, UserStyled, UserTitle, UserTitle2 } from './User.style'

type UserViewProps = {
  loading: boolean
  user: PublicUser
  authUser?: PublicUser
  downloadCallback: () => void
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
  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach((chapter) => {
    counter++
  })
  if (counter >= 20) badgeUnlocked = true

  return (
    <UserStyled>
      <UserTitle>
        <h1>Your certificate</h1>
      </UserTitle>
      <UserCard>
        <UserBadge badgeUnlocked={badgeUnlocked}>
          {badgeUnlocked ? (
            <>
              <h2>CONGRATS! YOU ARE NOW A OCEAN EXPERT!</h2>
              {authUser?.name ? (
                <UserBadgeButtons>
                  <Button
                    type="button"
                    text="Download PDF certificate"
                    icon="download"
                    loading={loading}
                    onClick={() => downloadCallback()}
                  />
                  <Link to={`/certificate/${user.username}`}>
                    <Button type="button" text="Certified URL" icon="link" loading={loading} onClick={() => { }} />
                  </Link>
                  <Link to={`/token/${user.username}`}>
                    <Button
                      type="button"
                      text="Get NFT certificate"
                      icon="wallet"
                      loading={loading}
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
                      setName(e.target.value)
                    }}
                    value={name}
                    onBlur={() => { }}
                    inputStatus={undefined}
                    errorMessage={undefined}
                  />
                  <Button
                    type="button"
                    text="Get certificate"
                    icon="login"
                    loading={loading}
                    onClick={() => getCertificateCallback()}
                  />
                </UserBadgeInput>
              )}
            </>
          ) : (
            <p>To obtain the completion certificate, you need to complete all chapters.</p>
          )}
        </UserBadge>
      </UserCard>

      <UserTitle2>
        <h1>Your progress for Ocean101:</h1>
      </UserTitle2>
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
