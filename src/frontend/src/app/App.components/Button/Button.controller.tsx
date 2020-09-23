import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'

import { BUTTON, ButtonColors, ButtonTypes, PRIMARY } from './Button.constants'
import { ButtonView } from './Button.view'

type ButtonProps = {
  text: string
  icon?: string
  color?: ButtonColors
  onClick?: () => void
  type?: ButtonTypes
  loading: boolean
  invertIcon: boolean
}

export const Button = ({ text, icon, color, onClick, type, loading, invertIcon }: ButtonProps) => {
  const [clicked, setClicked] = useState(false)
  const clickCallback = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 1000)
  }
  return (
    <ButtonView
      text={text}
      icon={icon}
      color={color}
      onClick={onClick}
      clicked={clicked}
      clickCallback={clickCallback}
      type={type}
      loading={loading}
      invertIcon={invertIcon}
    />
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  invertIcon: PropTypes.bool,
}

Button.defaultProps = {
  icon: undefined,
  color: PRIMARY,
  type: BUTTON,
  loading: false,
  invertIcon: false,
}
