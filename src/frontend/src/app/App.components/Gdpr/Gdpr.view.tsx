import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Button } from '../Button/Button.controller'

import { GdprStyled } from './Gdpr.style'

type GdprViewProps = {
  showing: boolean
  hideCallback: () => void
}

export const GdprView = ({ showing, hideCallback }: GdprViewProps) => (
  <>
    {showing && (
      <GdprStyled>
        <div>
          We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to
          measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods,
          including how to disable them, view our Privacy Policy.
        </div>
        <a href="https://google.com">
          <Button type="button" text="Refuse" icon="close" onClick={() => {}} />
        </a>
        <Button type="button" text="Accept" icon="check" onClick={() => hideCallback()} />
      </GdprStyled>
    )}
  </>
)

GdprView.propTypes = {
  showing: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
}

GdprView.defaultProps = {
  showing: false,
}
