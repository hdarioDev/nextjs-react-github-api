import React, { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext()

const SearchProvider = (props) => {
    const [userSearched, setUserSearched] = useState("")
    const [eventSearch, setEventSearch] = useState(false)
    console.log("init context userSearched ");
    // useEffect(() => {
    //     console.log("event context userSearched ", userSearched);
    //     if (!isDark) {

    //         document.body.classList.add('white-content')
    //     } else {
    //         document.body.classList.remove('white-content');
    //     }


    // }, [isDark]);

    return (
        <SearchContext.Provider
            value={
                {
                    userSearched,
                    setUserSearched,
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