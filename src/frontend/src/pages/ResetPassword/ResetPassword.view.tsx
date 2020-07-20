import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ResetPasswordInputs } from 'shared/user/ResetPassword'

//prettier-ignore
import { ResetPasswordCard, ResetPasswordStyled, ResetPasswordTitle } from './ResetPassword.style'

type ResetPasswordViewProps = {
  resetPasswordCallback: (values: any) => void
  loading: boolean
}

export const ResetPasswordView = ({ resetPasswordCallback, loading }: ResetPasswordViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    solution: { value: '' },
    newPassword: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, ResetPasswordInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, ResetPasswordInputs)

    if (!updatedForm.newPassword.error && !updatedForm.solution.error)
      resetPasswordCallback({
        newPassword: updatedForm.newPassword.value,
        solution: updatedForm.solution.value,
      })
    else setForm(updatedForm)
  }

  return (
    <ResetPasswordStyled>
      <ResetPasswordTitle>
        <h1>Reset Password</h1>
      </ResetPasswordTitle>
      <ResetPasswordCard>
        <form onSubmit={handleSubmit}>
          <Input
            icon="check-shield"
            name="solution"
            placeholder="Captcha from email"
            type="text"
            onChange={handleChange}
            value={form.solution.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.solution)}
            errorMessage={getErrorMessage(form.solution)}
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
      </ResetPasswordCard>
    </ResetPasswordStyled>
  )
}

ResetPasswordView.propTypes = {
  resetPasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ResetPasswordView.defaultProps = {
  loading: false,
}
