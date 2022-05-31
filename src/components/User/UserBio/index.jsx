import React from 'react'
import styles from './UserBio.module.scss'

const index = ({ user }) => {
    return (
        <section className={styles.BioContainer}>
            <div className={styles.Bio}>
                {user.bio ? user.bio : 'Bio not available'}
            </div>
            <div className={styles.ContainerFollowers}>
                <div className={styles.Repos}>
                    <p>Repos</p>
                    <span> {user.public_repos} </span>
                </div>
                <div className={styles.Repos}>
                    <p>Followers</p>
                    <span> {user.followers} </span>
                </div>
                <div className={styles.Repos}>
                    <p>Following</p>
                    <span> {user.following}  </span>
                </div>
            </div>
        </section>
    )
}

export default index