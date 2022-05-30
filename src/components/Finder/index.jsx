import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaUserCheck } from "react-icons/fa"
import styles from './Finder.module.scss'

const index = () => {
    return (
        <div className={styles.Finder}>
            <div className={styles.icon} ><FaUserCheck size="30" /> </div>
            <input type="text" />

            <button>Search</button>


        </div>
    )
}

export default index