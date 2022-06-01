import React, { useContext, useEffect } from 'react'
import { SearchContext } from '@context/SearchContext'
import MenuOption from '@components/Dashboard/MenuOption'
import { OPTIONS_MENU } from '@utils/constants'
import styles from './Dashboard.module.scss'

const Index = () => {

    const { setDataSearched } = useContext(SearchContext)
    useEffect(() => {
        setDataSearched({})
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <section className={styles.Dashboard}>
            {OPTIONS_MENU.map((item) => (
                <MenuOption key={item.title} image={item.img} title={item.title} link={item.link} />
            ))}


        </section>
    )
}

export default Index