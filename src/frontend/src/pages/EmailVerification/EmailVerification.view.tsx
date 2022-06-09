import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import CodeInput from "react-code-input";
import { SyntheticEvent, useState } from 'react'

//prettier-ignore
import { EmailVerificationCard, EmailVerificationStyled, CodeInputCard, EmailVerificationTitle } from './EmailVerification.style'

type EmailVerificationViewProps = {
    emailVerificationCallback: () => void
    verifyCodeCallback: (values: any) => void
    loading: boolean
    codeSent: boolean
}

export const EmailVerificationView = ({ emailVerificationCallback, verifyCodeCallback, loading, codeSent }: EmailVerificationViewProps) => {
    const [inputCode, setInputCode] = useState("");

    const handleSubmitRequest = (event: SyntheticEvent) => {
        event.preventDefault()
        emailVerificationCallback()
    }

    const handleSubmitCode = (event: SyntheticEvent,) => {
        event.preventDefault()
        verifyCodeCallback({ token: inputCode })
    }

    return (
        <EmailVerificationStyled>
            <EmailVerificationTitle>
                <h1>Verify your Email</h1>
            </EmailVerificationTitle>
            <EmailVerificationCard>
                {codeSent ?
                    <>
                        <CodeInputCard>
                            <CodeInput
                                inputMode={'verbatim'}
                                onChange={(value) =>
                                    setInputCode(value)
                                }
                                name="token-input"
                                type='text'
                                fields={6} />
                        </CodeInputCard>
                        <form onSubmit={handleSubmitCode}>
                            <Button type="submit" text="Verify" loading={loading} />
                        </form>
                    </>
                    :
                    <form onSubmit={handleSubmitRequest}>
                        <Button type="submit" text="Get verification code" icon="forgotPassword" loading={loading} />
                    </form>
                }
            </EmailVerificationCard>
        </EmailVerificationStyled>
    )
}

EmailVerificationView.propTypes = {
    emailVerificationCallback: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    codeSent: PropTypes.bool
}

EmailVerificationView.defaultProps = {
    loading: false,
    codeSent: false
}