import React from 'react'
import Link from 'next/link'
import { IoMdArrowBack } from "react-icons/io"
import Finder from '@components/Finder'
import styles from './Header.module.scss'

const Index = ({ placeholderText = "Search by username" }) => {
    return (
        <div className={styles.Header}>
            <Link href="/">
                <a>
                    <IoMdArrowBack size={30} />

                </a>
            </Link>

            <Finder placeholderText={placeholderText} />
        </div>
    )
}

export default Index