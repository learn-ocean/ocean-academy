import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ChangePasswordInputs } from 'shared/user/ChangePassword'

import { ChangePasswordMeta } from './ChangePassword.meta'
//prettier-ignore
import { ChangePasswordCard, ChangePasswordStyled, ChangePasswordTitle } from './ChangePassword.style'

type ChangePasswordViewProps = {
  changePasswordCallback: (values: any) => void
  loading: boolean
}

export const ChangePasswordView = ({ changePasswordCallback, loading }: ChangePasswordViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    password: { value: '' },
    newPassword: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, ChangePasswordInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, ChangePasswordInputs)

    if (!updatedForm.password.error && !updatedForm.newPassword.error)
      changePasswordCallback({
        password: updatedForm.password.value,
        newPassword: updatedForm.newPassword.value,
      })
    else setForm(updatedForm)
  }

  return (
    <ChangePasswordStyled>
      <ChangePasswordMeta />
      <ChangePasswordTitle>
        <h1>Change Password</h1>
      </ChangePasswordTitle>
      <ChangePasswordCard>
        <form onSubmit={handleSubmit}>
          <Input
            icon="password"
            name="password"
            placeholder="Current password"
            type="password"
            onChange={handleChange}
            value={form.password.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.password)}
            errorMessage={getErrorMessage(form.password)}
          />
          <Input
            icon="password"
            name="newPassword"
            placeholder="New password"
            type="password"
            onChange={handleChange}
            value={form.newPassword.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.newPassword)}
            errorMessage={getErrorMessage(form.newPassword)}
          />
          <InputSpacer />
          <Button type="submit" text="Submit" icon="login" loading={loading} />
        </form>
      </ChangePasswordCard>
    </ChangePasswordStyled>
  )
}

ChangePasswordView.propTypes = {
  changePasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ChangePasswordView.defaultProps = {
  loading: false,
}
