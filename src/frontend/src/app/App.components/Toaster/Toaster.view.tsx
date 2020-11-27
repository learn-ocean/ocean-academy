import * as PropTypes from 'prop-types'
import * as React from 'react'

import { downColor, upColor, backgroundColorDark } from '../../../styles'
// prettier-ignore
import { ToasterClose, ToasterContent, ToasterCountdown, ToasterGrid, ToasterIcon, ToasterMessage, ToasterStyled, ToasterTitle } from './Toaster.style'
import { ERROR } from './Toaster.constants'

type ToasterViewProps = {
  showing: boolean
  status?: string
  title: string
  message: string
  closeCallback: () => void
}

export const ToasterView = ({ showing, status, title, message, closeCallback }: ToasterViewProps) => {
  // eslint-disable-next-line
  const backgroundColorDark = status === 'success' ? upColor : downColor

  return (
    <ToasterStyled className={showing ? 'showing' : 'hidden'}>
      <ToasterGrid>
        <ToasterIcon style={{ backgroundColor: backgroundColorDark }}>
          {status === 'success' ? (
            <img alt={status} src={`/icons/success.svg`} />
          ) : (
              <img alt={status} src={`/icons/error.svg`} />
            )}
        </ToasterIcon>
        <ToasterContent>
          <ToasterTitle>{title}</ToasterTitle>
          <ToasterMessage>{message}</ToasterMessage>
        </ToasterContent>
        <ToasterClose onClick={() => closeCallback()}>
          <img alt={status} src={`/icons/close.svg`} />
        </ToasterClose>
      </ToasterGrid>
      <ToasterCountdown className={showing ? 'showing' : 'hidden'} style={{ backgroundColor: backgroundColorDark }} />
    </ToasterStyled>
  )
}

ToasterView.propTypes = {
  showing: PropTypes.bool.isRequired,
  status: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  closeCallback: PropTypes.func.isRequired,
}

ToasterView.defaultProps = {
  status: ERROR,
  title: 'Error',
  message: 'Undefined error',
}
