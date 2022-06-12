import React from "react"
import { ProfileCard, Highlight } from "../User.style"
import { useState } from "react"
import { EmailAddressNotVerified, ProfileSettings, ProfileValue, EditIcon } from "./ProfileSettings.style"
import { PrivateUser } from "shared/user/PrivateUser"
import { Link } from "react-router-dom"
import { Button } from "app/App.components/Button/Button.controller"
import { UserBadgeInput } from "../User.style"
import { Input } from "app/App.components/Input/Input.controller"

export type ProfileSettingsViewProps = {
    user: PrivateUser
    loading: boolean
    name: string
    email: string
    changeNameCallback: (closeNameInput: any) => void
    changeEmailCallback: (closeEmailInput: any) => void
    setName: (e:string) => void
    setEmail: (e:string) => void
}

export const ProfileSettingsView = ({user, loading, email, name, setName, setEmail, changeEmailCallback, changeNameCallback}: ProfileSettingsViewProps) => {
    const [changeName, setChangeName] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);

    return (
        <ProfileCard>
            <ProfileSettings>
                {user.name && !changeName ? 
                <p><Highlight>Name: </Highlight> <ProfileValue>{user.name}</ProfileValue>
                <EditIcon onClick={() => {setChangeName(true); setChangeEmail(false)}}>
                    <use xlinkHref={`/icons/sprites.svg#edit`} />
                </EditIcon>
                </p>  
                :
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
                  text="Edit"
                  icon="login"
                  loading={loading}
                  onClick={()=>changeNameCallback(() => setChangeName(false))}
                />
              </UserBadgeInput>
                }
            {!changeEmail ? 
            <p><Highlight>Email:</Highlight> <ProfileValue>{user.email}</ProfileValue>
            <EditIcon onClick={
              () => {setChangeEmail(true); setChangeName(false);}
              }>
                    <use xlinkHref={`/icons/sprites.svg#edit`} />
            </EditIcon>
                {!user.emailVerified && 
                <EmailAddressNotVerified>
                    <Link to="/verify-email">Unverified email. Click to verify.</Link>
                </EmailAddressNotVerified>
                }
            </p>
                :
            <UserBadgeInput>
            <Input
              icon="email"
              name="email"
              placeholder="Email address"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              onBlur={() => { }}
              inputStatus={undefined}
              errorMessage={undefined}
            />
            <Button
              type="button"
              text="Edit"
              icon="login"
              loading={loading}
              onClick={() => changeEmailCallback(() => setChangeEmail(false))}
            />
          </UserBadgeInput>
        }
            </ProfileSettings>
        </ProfileCard>
    )
        }