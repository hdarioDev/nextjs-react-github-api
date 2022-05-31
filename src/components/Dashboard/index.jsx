import React from 'react'
import MenuOption from '@components/Dashboard/MenuOption'
import { OPTIONS_MENU } from '@utils/constants'
import styles from './Dashboard.module.scss'

const index = () => {
    console.log("OPTIONS_MENU ", OPTIONS_MENU);
    return (
        <section className={styles.Dashboard}>
            {OPTIONS_MENU.map((item) => (
                <MenuOption key={item.title} image={item.img} title={item.title} link={item.link} />
            ))}


        </section>
    )
}

export default index