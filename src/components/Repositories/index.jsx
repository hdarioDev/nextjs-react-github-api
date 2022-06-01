import React from 'react'
import styles from './Repositories.module.scss'
import { BiLinkExternal } from "react-icons/bi"


const index = ({ repository }) => {
    return (
        <section className={styles.Repositories}>
            <div className={styles.Header}>
                <p>{repository.name.toUpperCase()} </p>
                <p>{repository.language} </p>
                <p>{repository.description} </p>
            </div>
            <div className={styles.Footer}>
                <p>Created: {new Date(repository.created_at).toLocaleDateString('en-us', { year: "numeric", month: "short" })} </p>
                <span className={styles.spanSeparator}>|</span>
                <p>Updated: {new Date(repository.updated_at).toLocaleDateString('en-us', { year: "numeric", month: "short" })} </p>
            </div>

            <a href={repository.clone_url} target="_blank"> <BiLinkExternal size={24} /> </a>
        </section>
    )
}

export default index