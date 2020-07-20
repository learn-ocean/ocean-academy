import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import { SoftImageView } from './SoftImage.view'

type SoftImageProps = {
  src?: string
  alt?: string
}

export const SoftImage = ({ src, alt }: SoftImageProps) => {
  const [displayed, setDisplayed] = useState(false)

  const displayCallback = () => {
    setDisplayed(true)
  }

  return <SoftImageView src={src} alt={alt} displayed={displayed} displayCallback={displayCallback} />
}

SoftImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

SoftImage.defaultProps = {}
