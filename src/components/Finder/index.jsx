import React, { useRef, useContext } from 'react'
import { FaUserCheck } from "react-icons/fa"
import styles from './Finder.module.scss'
import { SearchContext } from '@context/SearchContext'

const Index = ({ placeholderText = "Search by username" }) => {

    const { setDataSearched, setEventSearch } = useContext(SearchContext)
    const focusInputRef = useRef();

    const handleSearch = () => {
        const inputValue = focusInputRef.current.value.trim()
        if (inputValue != '') {
            setDataSearched(focusInputRef.current.value)
            setEventSearch(true)
        }

    }
    const handleChanges = () => {

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

export default Index