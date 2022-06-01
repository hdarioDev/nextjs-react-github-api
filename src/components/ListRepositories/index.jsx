import React from 'react'
import Respositories from '@components/Repositories'
import styles from './ListRepositories.module.scss'

const Index = ({ repositories }) => {
    if (!Array.isArray(repositories)) {
        return null
    }
    return (
        <section className={styles.ListRepositories}>
            {repositories.map((item) => (
                <Respositories key={item.id} repository={item} />
            ))}
        </section>
    )
}

export default Index