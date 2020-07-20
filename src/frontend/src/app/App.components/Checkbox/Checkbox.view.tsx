import * as PropTypes from 'prop-types'
import * as React from 'react'
import { MouseEvent } from 'react'
import { Motion, spring } from 'react-motion'

import { CheckboxStyled } from './Checkbox.style'

type CheckboxViewProps = {
  checked: boolean
  checkCallback: (e: MouseEvent) => void
}

export const CheckboxView = ({ checkCallback, checked }: CheckboxViewProps) => {
  const totalLength = 77.47
  const circleLength = 55.412864685058594
  const checkedLength = -22.556869506835936

  const defaultSpring = -totalLength
  const circleSpring = spring(circleLength, { stiffness: 60, damping: 11 })
  const checkedSpring = spring(checkedLength, { stiffness: 120, damping: 13.8 })

  return (
    <CheckboxStyled onClick={checkCallback}>
      <svg viewBox="0 0 17 21">
        <g>
          <Motion defaultStyle={{ offset: defaultSpring }} style={{ offset: checked ? circleSpring : checkedSpring }}>
            {({ offset }) => (
              <path
                strokeDasharray={`${totalLength} ${totalLength}`}
                strokeDashoffset={offset}
                d="M16.5 5.7L5.8 16.3L0.5 11L0.500099 6.01368L8.5001 1.39368L16.5001 6.01366V10.5V15.2437L8.5001 19.8637L0.500099 15.2437L0.5 11.5"
              />
            )}
          </Motion>
        </g>
      </svg>
    </CheckboxStyled>
  )
}

CheckboxView.propTypes = {
  checkCallback: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

CheckboxView.defaultProps = {}
