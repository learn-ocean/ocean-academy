import * as PropTypes from 'prop-types'
import * as React from 'react'
import { MouseEvent } from 'react'

import { RadioStyled } from './Radio.style'

type RadioViewProps = {
  items: string[]
  clickCallback: (e: any) => void
  value?: string
}

export const RadioView = ({ items, clickCallback, value }: RadioViewProps) => {
  return (
    <RadioStyled>
      {items.map((item) => (
        <label key={item}>
          <input type="radio" checked={value === item} value={item} onChange={clickCallback} />
          <span>{item}</span>
        </label>
      ))}
    </RadioStyled>
  )
}

RadioView.propTypes = {
  items: PropTypes.array.isRequired,
  clickCallback: PropTypes.func.isRequired,
  value: PropTypes.string,
}

RadioView.defaultProps = {}
