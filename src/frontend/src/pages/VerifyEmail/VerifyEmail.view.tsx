import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { SyntheticEvent, useState } from 'react'
import { useEffect, useRef } from 'react'
//prettier-ignore
import { VerifyEmailCard, VerifyEmailFieldsContainer, VerifyEmailInput, VerifyEmailSeparator, VerifyEmailStyled, VerifyEmailTitle } from './VerifyEmail.style'
import { VerifyEmailResend } from './VerifyEmail.components/VerifyEmailResend/VerifyEmailResend.controller'

type VerifyEmailViewProps = {
  verifyEmailCallback: (values: any) => void
  loading: boolean
  autoSubmitted: boolean
}

export const VerifyEmailView = ({ verifyEmailCallback, loading, autoSubmitted }: VerifyEmailViewProps) => {
  const [inputSolution, setInputSolution] = useState(['', '', '', ''])

  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if ((!inputSolution[0] || inputSolution[0] === '') && firstRef && firstRef.current) {
      setTimeout(() => {
        firstRef?.current?.focus()
      }, 1000)
    }
    if (inputSolution[0] && inputSolution[0] !== '' && secondRef && secondRef.current) {
      secondRef.current.focus()
    }
    if (inputSolution[1] && inputSolution[1] !== '' && thirdRef && thirdRef.current) {
      thirdRef.current.focus()
    }
    if (inputSolution[2] && inputSolution[2] !== '' && fourthRef && fourthRef.current) {
      fourthRef.current.focus()
    }
    if (
      inputSolution[0] !== '' &&
      inputSolution[1] !== '' &&
      inputSolution[2] !== '' &&
      inputSolution[3] !== '' &&
      !autoSubmitted
    ) {
      verifyEmailCallback({
        solution: inputSolution.join(''),
      })
    }
  }, [inputSolution, verifyEmailCallback, autoSubmitted])

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    verifyEmailCallback({
      solution: inputSolution.join(''),
    })
  }

  const setVal = (index: number, value: string): void => {
    const inputSolutionTemp = inputSolution.slice(0, 4)
    inputSolutionTemp[index] = value
    setInputSolution(inputSolutionTemp)
  }

  return (
    <VerifyEmailStyled>
      <VerifyEmailTitle>
        <h1>Verify Email</h1>
      </VerifyEmailTitle>
      <VerifyEmailCard>
        <form onSubmit={handleSubmit}>
          <VerifyEmailFieldsContainer>
            <VerifyEmailInput
              type="text"
              name="first"
              value={inputSolution[0]}
              onChange={(e) => setVal(0, e.target.value)}
              maxLength={1}
              size={1}
              autoComplete="off"
              min="0"
              max="9"
              required
              pattern="\d{1}"
              ref={firstRef}
              autoFocus={true}
            />
            <VerifyEmailInput
              type="text"
              name="second"
              value={inputSolution[1]}
              onChange={(e) => setVal(1, e.target.value)}
              maxLength={1}
              size={1}
              autoComplete="off"
              min="0"
              max="9"
              required
              pattern="\d{1}"
              ref={secondRef}
            />
            <VerifyEmailInput
              type="text"
              name="third"
              value={inputSolution[2]}
              onChange={(e) => setVal(2, e.target.value)}
              maxLength={1}
              size={1}
              autoComplete="off"
              min="0"
              max="9"
              required
              pattern="\d{1}"
              ref={thirdRef}
            />
            <VerifyEmailInput
              type="text"
              name="fourth"
              value={inputSolution[3]}
              onChange={(e) => setVal(3, e.target.value)}
              maxLength={1}
              size={1}
              autoComplete="off"
              min="0"
              max="9"
              required
              pattern="\d{1}"
              ref={fourthRef}
            />
          </VerifyEmailFieldsContainer>
          <VerifyEmailSeparator />
          <Button text="Verify" icon="check-shield" loading={loading} type="submit" />
        </form>
      </VerifyEmailCard>
      <VerifyEmailResend />
    </VerifyEmailStyled>
  )
}

VerifyEmailView.propTypes = {
  verifyEmailCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  autoSubmitted: PropTypes.bool.isRequired,
}

VerifyEmailView.defaultProps = {
  loading: false,
}
