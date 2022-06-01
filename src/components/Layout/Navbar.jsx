import React, { useContext } from 'react'
import Link from 'next/link'
import { VscGithub } from "react-icons/vsc"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '@context/ThemeContext'
import SvgLogo from '../Logo'
import styles from './Navbar.module.scss'

const index = () => {

    const { isDark, setIsDark } = useContext(ThemeContext)
    console.log("isDark from navbar ", isDark);
    const toggleDarkMode = (checked) => {
        setIsDark(checked)
    }

    return (

        <header className={styles.header}>
            <nav className={styles.containerNavbar} >

                <Link href="/">
                    <a className={styles.logoContainer} >
                        <VscGithub className={styles.link} size="40" />
                    </a>
                </Link>
                <SvgLogo className={styles.logo} />
                <div className={styles.toogle}>
                    <DarkModeSwitch
                        // style={{ color: 'yellow' }}
                        checked={isDark}
                        onChange={toggleDarkMode}
                        size={40}
                        sunColor={'white'}
                    />
                </div>

            </nav>
        </header>

    )
}

export default index