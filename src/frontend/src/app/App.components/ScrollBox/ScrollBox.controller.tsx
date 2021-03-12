import * as React from 'react'
import { ScrollBoxView } from './ScrollBox.view'

type ScrollBoxProps = {
    children: any
}

export const ScrollBox = ({ children }: ScrollBoxProps) => {
    return (
        <ScrollBoxView
            children={children}
        />
    )
}