import * as PropTypes from 'prop-types'
import * as React from 'react'

import { SoftImageStyled } from './SoftImage.style'

type SoftImageViewProps = {
  src?: string
  alt?: string
  displayed: boolean
  displayCallback: () => void
}

export const SoftImageView = ({ src, alt, displayed, displayCallback }: SoftImageViewProps) => {
  return <SoftImageStyled src={src} alt={alt} className={`${displayed}`} onLoad={displayCallback} />
}

SoftImageView.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  displayed: PropTypes.bool.isRequired,
  displayCallback: PropTypes.func.isRequired,
}
