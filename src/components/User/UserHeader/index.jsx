import React from 'react'
import Image from 'next/image'
import styles from './UserHeader.module.scss'

const index = ({ user }) => {
    return (
        <div className={styles.UserHeader}>
            {user.avatar_url ? <img alt={`Photo ${user.name}`} src={user.avatar_url} width={200} height={200} /> : null}
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

export default index