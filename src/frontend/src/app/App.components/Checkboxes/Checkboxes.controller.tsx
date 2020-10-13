import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'

import { CheckboxesView } from './Checkboxes.view'

type CheckboxesProps = {
  items: string[]
  onUpdate: (value: string) => void
}

export const Checkboxes = ({ items, onUpdate }: CheckboxesProps) => {
  const [value, setvalue] = useState<string | undefined>(undefined)

  const clickCallback = (e: any) => {
    let value = e.target.value
    setvalue(value)
    onUpdate(value)
  }

  return <CheckboxesView items={items} clickCallback={clickCallback} value={value} />
}

Checkboxes.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

Checkboxes.defaultProps = {}
