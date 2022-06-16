import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
import { PrivateUser } from "shared/user/PrivateUser";
import { changeEmail, sendName } from "./ProfileSettings.actions";
import { ProfileSettingsView } from "./ProfileSettings.view";

export type ProfileSettingsProps = {
    user : PrivateUser
}

export const ProfileSettings = ({user}: ProfileSettingsProps) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: State) => state.loading)
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)

    const changeNameCallback = async(closeNameInput: any) => {
        await dispatch(sendName({name}))
        closeNameInput()
    }

    const changeEmailCallback = async(closeEmailInput: any) => {
        dispatch(changeEmail({email}))
        closeEmailInput();
    }

    return <ProfileSettingsView 
    user={user} 
    name={name}
    email={email}
    setName={setName}
    setEmail={setEmail}
    changeNameCallback={changeNameCallback}
    changeEmailCallback={changeEmailCallback}
    loading={loading}/>
}