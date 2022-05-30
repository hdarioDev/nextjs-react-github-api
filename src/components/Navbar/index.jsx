import React from 'react'
import Link from 'next/link'
import { VscGithub } from "react-icons/Vsc"
import { DarkModeSwitch } from 'react-toggle-dark-mode';


import styles from './Navbar.module.scss'

const index = () => {

    const [isDarkMode, setDarkMode] = React.useState(true)
    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
        console.log(" checked ", checked)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.containerNavbar} >
                <Link href="/">
                    <VscGithub className={styles.link} size="40" />
                </Link>
                <DarkModeSwitch
                    // style={{ marginBottom: '2rem' }}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={40}
                />
            </nav>
        </header>

    )
}

export default index