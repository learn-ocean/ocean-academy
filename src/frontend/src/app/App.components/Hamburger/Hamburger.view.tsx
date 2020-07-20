import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  HamburgerBox,
  HamburgerInnerBottom,
  HamburgerInnerMiddle,
  HamburgerInnerTop,
  HamburgerStyled,
} from './Hamburger.style'

type HamburgerViewProps = {
  activated: boolean
  activateCallback: () => void
}

export const HamburgerView = ({ activated, activateCallback }: HamburgerViewProps) => (
  <HamburgerStyled onClick={() => activateCallback()}>
    <HamburgerBox>
      <HamburgerInnerTop className={`${activated}`} />
      <HamburgerInnerMiddle />
      <HamburgerInnerBottom className={`${activated}`} />
    </HamburgerBox>
  </HamburgerStyled>
)

HamburgerView.propTypes = {
  activated: PropTypes.bool,
  activateCallback: PropTypes.func,
}

HamburgerView.defaultProps = {
  activated: false,
}
