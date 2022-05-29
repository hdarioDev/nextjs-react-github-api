import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const index = () => {
    return (
        <nav className={styles.containerNavbar} >
            <Link href="/">
                <a>
                    Search's API GITHUB
                </a>
            </Link>
            <p>MODO DARK</p>
        </nav>
    )
}

export default index