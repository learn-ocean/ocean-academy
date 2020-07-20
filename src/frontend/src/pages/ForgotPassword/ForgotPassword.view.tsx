import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ForgotPasswordInputs } from 'shared/user/ForgotPassword'

//prettier-ignore
import { ForgotPasswordCard, ForgotPasswordStyled, ForgotPasswordTitle } from './ForgotPassword.style'

type ForgotPasswordViewProps = {
  forgotPasswordCallback: (values: any) => void
  loading: boolean
}

export const ForgotPasswordView = ({ forgotPasswordCallback, loading }: ForgotPasswordViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    usernameOrEmail: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, ForgotPasswordInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, ForgotPasswordInputs)

    if (!updatedForm.usernameOrEmail.error)
      forgotPasswordCallback({
        usernameOrEmail: updatedForm.usernameOrEmail.value,
      })
    else setForm(updatedForm)
  }

  return (
    <ForgotPasswordStyled>
      <ForgotPasswordTitle>
        <h1>Forgot Password</h1>
      </ForgotPasswordTitle>
      <ForgotPasswordCard>
        <form onSubmit={handleSubmit}>
          <Input
            icon="user"
            name="usernameOrEmail"
            placeholder="Username or Email"
            type="text"
            onChange={handleChange}
            value={form.usernameOrEmail.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.usernameOrEmail)}
            errorMessage={getErrorMessage(form.usernameOrEmail)}
          />
          <InputSpacer />
          <Button type="submit" text="Submit" icon="forgotPassword" loading={loading} />
        </form>
      </ForgotPasswordCard>
    </ForgotPasswordStyled>
  )
}

ForgotPasswordView.propTypes = {
  forgotPasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ForgotPasswordView.defaultProps = {
  loading: false,
}
