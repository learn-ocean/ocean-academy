import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'

import { RadioView } from './Radio.view'

type RadioProps = {
  items: string[]
  onUpdate: (value: string) => void
}

export const Radio = ({ items, onUpdate }: RadioProps) => {
  const [value, setvalue] = useState<string | undefined>(undefined)

  const clickCallback = (e: any) => {
    let value = e.target.value
    setvalue(value)
    onUpdate(value)
  }

  return <RadioView items={items} clickCallback={clickCallback} value={value} />
}

Radio.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

Radio.defaultProps = {}
