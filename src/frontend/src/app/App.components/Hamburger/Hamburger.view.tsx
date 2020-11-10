import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  HamburgerBox,
  HamburgerInnerBottom,
  HamburgerInnerMiddle,
  HamburgerInnerTop,
  HamburgerStyledLeft,
  HamburgerStyledRight
} from './Hamburger.style'

// direction: left true, right false
type HamburgerViewProps = {
  activated: boolean
  activateCallback: () => void
}

export const HamburgerViewLeft = ({ activated, activateCallback }: HamburgerViewProps) => (
  <HamburgerStyledLeft onClick={() => activateCallback()}>
    <HamburgerBox>
      <HamburgerInnerTop className={`${activated}`} />
      <HamburgerInnerMiddle />
      <HamburgerInnerBottom className={`${activated}`} />
    </HamburgerBox>
  </HamburgerStyledLeft>
)

// Only visible when the screen is < 1130px
export const HamburgerViewRight = ({ activated, activateCallback }: HamburgerViewProps) => (
  <HamburgerStyledRight onClick={() => activateCallback()}>
    <HamburgerBox>
      <HamburgerInnerTop className={`${activated}`} />
      <HamburgerInnerMiddle />
      <HamburgerInnerBottom className={`${activated}`} />
    </HamburgerBox>
  </HamburgerStyledRight>
)

HamburgerViewLeft.propTypes = {
  activated: PropTypes.bool,
  activateCallback: PropTypes.func,
}

HamburgerViewLeft.defaultProps = {
  activated: false,
}

HamburgerViewRight.propTypes = {
  activated: PropTypes.bool,
  activateCallback: PropTypes.func,
}

HamburgerViewRight.defaultProps = {
  activated: false,
}
