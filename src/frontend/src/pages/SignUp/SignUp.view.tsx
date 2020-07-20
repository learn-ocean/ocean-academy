import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { SignUpInputs } from 'shared/user/SignUp'

import { SignUpCard, SignUpLogin, SignUpStyled, SignUpTitle } from './SignUp.style'

type SignUpViewProps = {
  signUpCallback: (values: any) => void
  loading: boolean
}

export const SignUpView = ({ signUpCallback, loading }: SignUpViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    username: { value: '' },
    email: { value: '' },
    password: { value: '' },
    confirmPassword: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, SignUpInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, SignUpInputs)

    if (
      !updatedForm.username.error &&
      !updatedForm.email.error &&
      !updatedForm.password.error &&
      !updatedForm.confirmPassword.error
    )
      signUpCallback({
        username: updatedForm.username.value,
        email: updatedForm.email.value,
        password: updatedForm.password.value,
        confirmPassword: updatedForm.confirmPassword.value,
      })
    else setForm(updatedForm)
  }

  return (
    <SignUpStyled>
      <SignUpTitle>
        <h1>Sign Up</h1>
      </SignUpTitle>
      <SignUpCard>
        <form onSubmit={handleSubmit}>
          <Input
            icon="user"
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            value={form.username.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.username)}
            errorMessage={getErrorMessage(form.username)}
          />
          <Input
            icon="email"
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleChange}
            value={form.email.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.email)}
            errorMessage={getErrorMessage(form.email)}
          />
          <Input
            icon="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={form.password.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.password)}
            errorMessage={getErrorMessage(form.password)}
          />
          <Input
            icon="password"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            onChange={handleChange}
            value={form.confirmPassword.value}
            onBlur={handleBlur}
            inputStatus={getInputStatus(form.confirmPassword)}
            errorMessage={getErrorMessage(form.confirmPassword)}
          />
          <InputSpacer />
          <Button type="submit" text="Sign Up" icon="sign-up" loading={loading} />
        </form>
      </SignUpCard>
      <SignUpLogin>
        <Link to="/login">Or login now!</Link>
      </SignUpLogin>
    </SignUpStyled>
  )
}

SignUpView.propTypes = {
  signUpCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

SignUpView.defaultProps = {
  loading: false,
}
