import * as PropTypes from 'prop-types'
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

ScrollBoxView.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
}

ScrollBoxView.defaultProps = {}