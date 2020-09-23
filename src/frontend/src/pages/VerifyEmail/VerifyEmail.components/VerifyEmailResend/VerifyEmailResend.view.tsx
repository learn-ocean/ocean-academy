import * as PropTypes from 'prop-types'
import * as React from 'react'

import { VerifyEmailResendStyled, VerifyEmailResendInactive, VerifyEmailResendActive } from './VerifyEmailResend.style'

type VerifyEmailResendViewProps = {
  loading: boolean
  resendEmailCallback: () => void
}

export const VerifyEmailResendView = ({ loading, resendEmailCallback }: VerifyEmailResendViewProps) => {
  return (
    <VerifyEmailResendStyled>
      {loading ? (
        <VerifyEmailResendInactive>Loading...</VerifyEmailResendInactive>
      ) : (
        <VerifyEmailResendActive onClick={() => resendEmailCallback()}>Or send email again</VerifyEmailResendActive>
      )}
    </VerifyEmailResendStyled>
  )
}

VerifyEmailResendView.propTypes = {
  loading: PropTypes.bool,
  resendEmailCallback: PropTypes.func.isRequired,
}

VerifyEmailResendView.defaultProps = {
  loading: false,
}
