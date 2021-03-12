import * as React from 'react'
import { SearchBarView } from './SearchBar.view'

type SearchBarProps = {
    searchFor: 'Courses'
}

export const SearchBar = ({ searchFor }: SearchBarProps) => {
    return (
        <SearchBar
            searchFor={searchFor}
        />
    )
}