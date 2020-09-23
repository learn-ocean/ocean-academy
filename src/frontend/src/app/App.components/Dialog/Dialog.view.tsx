import * as PropTypes from 'prop-types'
import * as React from 'react'

import { DialogCharacter, DialogStyled, DialogText } from './Dialog.style'

type DialogProps = {
  text: string
  character: string
}

export const DialogView = ({ text, character }: DialogProps) => {
  return (
    <DialogStyled>
      <DialogCharacter alt="character-bg" src={`/dialog/${character}.svg`} />
      <DialogText>{text}</DialogText>
    </DialogStyled>
  )
}

DialogView.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
}
