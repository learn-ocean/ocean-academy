import * as React from 'react'

import { FooterStyled } from './Footer.style'

export const FooterView: any = () => (
  <FooterStyled>
    <br />
    This site is protected by reCAPTCHA and the Google{' '}
    <u>
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </u>{' '}
    and{' '}
    <u>
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>
    </u>{' '}
    apply.
  </FooterStyled>
)
