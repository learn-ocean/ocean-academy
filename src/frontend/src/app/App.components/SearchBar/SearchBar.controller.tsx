import * as React from 'react'

import { SearchBarView } from './SearchBar.view'

type SearchBarProps = {
    searchFor: 'Courses'
}

export const SearchBar = ({ searchFor }: SearchBarProps) => {

    const filterItems = (e: string, searchFor: string) => {
        // change the Courses shown. Add to state.
    }
    
    return (
        <SearchBarView
            placeholder={'Search'}
            filterItems={filterItems}
            searchFor={searchFor}
        />
    )
}