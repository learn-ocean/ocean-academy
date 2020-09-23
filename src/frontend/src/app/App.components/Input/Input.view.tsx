import * as React from 'react'
import * as PropTypes from 'prop-types'

import { InputStyled, InputComponent, InputStatus, InputIcon, InputErrorMessage } from './Input.style'

type InputViewProps = {
  icon?: string
  placeholder: string
  name?: string
  value?: string
  onChange: any
  onBlur: any
  inputStatus?: 'success' | 'error'
  type: string
  errorMessage?: string
}

export const InputView = ({
  icon,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  inputStatus,
  type,
  errorMessage,
}: InputViewProps) => (
  <InputStyled>
    {icon && (
      <InputIcon>
        <use xlinkHref={`/icons/sprites.svg#${icon}`} />
      </InputIcon>
    )}
    <InputComponent
      type={type}
      name={name}
      className={inputStatus}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete={name}
    />
    <InputStatus className={inputStatus} />
    {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
  </InputStyled>
)

InputView.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  inputStatus: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
}

InputView.defaultProps = {
  icon: undefined,
  placeholder: undefined,
  name: undefined,
  value: undefined,
  inputStatus: undefined,
  type: 'text',
}
