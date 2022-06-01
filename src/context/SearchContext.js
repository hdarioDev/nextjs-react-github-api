import React, { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext()

const SearchProvider = (props) => {
    const [dataSearched, setDataSearched] = useState("")
    const [eventSearch, setEventSearch] = useState(false)

    return (
        <SearchContext.Provider
            value={
                {
                    dataSearched,
                    setDataSearched,
                    eventSearch,
                    setEventSearch
                }
            }
        >
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider