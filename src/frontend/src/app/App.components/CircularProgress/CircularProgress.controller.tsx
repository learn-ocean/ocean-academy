import * as React from 'react'
import { CircularProgressView, CircularProgressProps } from './CircularProgress.view'


export const CircularProgress = ({percentage, text, title}: CircularProgressProps) => {
    return <CircularProgressView 
            percentage={percentage}
            text={text}
            title={title}

    />
}