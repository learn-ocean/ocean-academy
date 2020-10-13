import * as PropTypes from 'prop-types'
import * as React from 'react'
import { MouseEvent } from 'react'

import { CheckboxesStyled } from './Checkboxes.style'

type CheckboxesViewProps = {
  items: string[]
  clickCallback: (e: any) => void
  value?: string
}

export const CheckboxesView = ({ items, clickCallback, value }: CheckboxesViewProps) => {
  return (
    <CheckboxesStyled>
      {items.map((item) => (
        <label key={item}>
          <input type="Checkboxes" checked={value === item} value={item} onChange={clickCallback} />
          <span>{item}</span>
        </label>
      ))}
    </CheckboxesStyled>
  )
}

CheckboxesView.propTypes = {
  items: PropTypes.array.isRequired,
  clickCallback: PropTypes.func.isRequired,
  value: PropTypes.string,
}

CheckboxesView.defaultProps = {}
