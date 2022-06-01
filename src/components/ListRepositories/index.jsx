import React from 'react'
import Respositories from '@components/Repositories'
import styles from './ListRepositories.module.scss'

const index = ({ repositories }) => {
    console.log("repositories COMPONENT ", repositories);
    if (!Array.isArray(repositories)) {
        console.log("retornar NULL ");
        return null
    } else {
        console.log("retorna lista con array ");
    }
    return (
        <section className={styles.ListRepositories}>
            {repositories.map((item) => (
                <Respositories key={item.id} repository={item} />
            ))}
        </section>
    )
}

export default index