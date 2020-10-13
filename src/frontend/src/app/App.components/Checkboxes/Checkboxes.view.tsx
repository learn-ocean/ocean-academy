import * as PropTypes from 'prop-types'
import * as React from 'react'

import { CheckboxesStyled } from './Checkboxes.style'

type CheckboxesViewProps = {
  items: string[]
  clickCallback: (e: any) => void
  selected: string[]
}

export const CheckboxesView = ({ items, clickCallback, selected }: CheckboxesViewProps) => {
  return (
    <CheckboxesStyled>
      {items.map((item) => (
        <label key={item}>
          <input type="checkbox" checked={selected.indexOf(item) >= 0} value={item} onChange={clickCallback} />
          <span>{item}</span>
        </label>
      ))}
    </CheckboxesStyled>
  )
}

CheckboxesView.propTypes = {
  items: PropTypes.array.isRequired,
  clickCallback: PropTypes.func.isRequired,
  selected: PropTypes.array,
}

CheckboxesView.defaultProps = {}
