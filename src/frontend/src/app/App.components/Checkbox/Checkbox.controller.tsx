import * as React from 'react'
import { MouseEvent } from 'react'
import * as PropTypes from 'prop-types'

import { CheckboxView } from './Checkbox.view'

type CheckboxProps = {
  checked: boolean
  checkCallback: (e: MouseEvent) => void
}

export const Checkbox = ({ checkCallback, checked }: CheckboxProps) => {
  return <CheckboxView checked={checked} checkCallback={checkCallback} />
}

Checkbox.propTypes = {
  checkCallback: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

Checkbox.defaultProps = {}
