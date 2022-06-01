import React from 'react'
import styles from './UserHeader.module.scss'

const Index = ({ user }) => {
    return (
        <div className={styles.UserHeader}>
            {user.avatar_url ? <a target="_blank" rel="noopener noreferrer" href={`${user.html_url}`}><img alt={`Photo ${user.name}`} src={user.avatar_url} width={200} height={200} /> </a> : null}
            <div className={styles.UserName}>
                <p>{user.name}</p>
                <p>@{user.login}</p>
                <p >
                    Joined {new Date(user.created_at).toLocaleDateString('en-us', { year: "numeric", month: "short" })}
                </p>
            </div>


        </div>
    )
}

export default Index