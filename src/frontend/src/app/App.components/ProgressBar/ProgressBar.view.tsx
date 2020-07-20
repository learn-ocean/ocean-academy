import * as PropTypes from 'prop-types'
import * as React from 'react'

import { ProgressBarStyled } from './ProgressBar.style'
import { READY } from './ProgressBar.constants'

type ProgressBarViewProps = { status: string }

export const ProgressBarView = ({ status }: ProgressBarViewProps) => <ProgressBarStyled className={status} />

ProgressBarView.propTypes = {
  status: PropTypes.string,
}

ProgressBarView.defaultProps = {
  status: READY,
}
