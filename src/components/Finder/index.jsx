import React, { useRef, useContext } from 'react'
import { FiSearch } from "react-icons/fi"
import { FaUserCheck } from "react-icons/fa"
import styles from './Finder.module.scss'
import { SearchContext } from '@context/SearchContext'

const index = ({ placeholderText = "Search by username" }) => {

    const { userSearched, setUserSearched, eventSearch, setEventSearch } = useContext(SearchContext)
    const focusInputRef = useRef();

    const handleSearch = () => {
        console.log("send...", focusInputRef.current.value)
        setUserSearched(focusInputRef.current.value)
        setEventSearch(true)
    }
    const handleChanges = () => {
        console.log("keys press");
        setEventSearch(false)
    }
    return (
        <div className={styles.Finder}>
            <div className={styles.icon} ><FaUserCheck size="30" /> </div>
            <input type="text" onChange={handleChanges} ref={focusInputRef} placeholder={placeholderText} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default index