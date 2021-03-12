import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Input } from '../Input/Input.controller'

import { SearchBoxStyled } from './SearchBar.style'

type SearchBarViewProps = {
    placeholder: string
    filterItems: (e: string, searchFor: string) => void
    searchFor: string
}

export const SearchBarView = ({ placeholder, filterItems, searchFor }: SearchBarViewProps) => {
    return (
        <SearchBoxStyled>
            <Input
                icon="search"
                name="Course Search"
                placeholder={placeholder}
                onBlur={() => { }}
                type="text"
                onChange={(e) => {
                    filterItems(e.target.value, searchFor)
                }}
                inputStatus={undefined}
                errorMessage={undefined}
            />
        </SearchBoxStyled>
    )
}

SearchBarView.propTypes = {
    placeholder: PropTypes.string.isRequired,
    filterItems: PropTypes.func.isRequired,
    searchFor: PropTypes.string.isRequired
}

SearchBarView.defaultProps = {
    placeholder: '',
    filterItems: () => { },
    searchFor: ''
}