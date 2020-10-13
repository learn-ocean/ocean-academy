import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { chapterData } from 'pages/Chapter/Chapter.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { UserBadge, UserBadgeInput, UserCard, UserChapter, UserProgress, UserStyled, UserTitle, UserTitle2 } from './User.style'

type UserViewProps = {
  loading: boolean
  user: PublicUser
  downloadCallback: () => void
  name: string
  setName: (e: string) => void
}

export const UserView = ({ loading, user, downloadCallback, name, setName }: UserViewProps) => {
  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach((chapter) => {
    counter++
  })
  if (counter >= 0) badgeUnlocked = true

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
                  onBlur={() => {}}
                  inputStatus={undefined}
                  errorMessage={undefined}
                />
                <Button
                  type="button"
                  text="Download certificate"
                  icon="download"
                  loading={loading}
                  onClick={() => downloadCallback()}
                />
              </UserBadgeInput>
            </>
          ) : (
            <p>To obtain the completion certificate, you need to complete all chapters.</p>
          )}
        </UserBadge>
      </UserCard>

      <UserTitle2>
        <h1>Your progress</h1>
      </UserTitle2>
      <UserCard>
        <UserProgress>
          {chapterData.map((chapter) => {
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
