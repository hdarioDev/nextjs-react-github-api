import React from 'react'
import { FaTwitter, FaLink, FaMapMarkerAlt } from 'react-icons/fa'

import styles from './UserFooter.module.scss'

const index = ({ user }) => {
    return (
        <section className={styles.UserFooter}>
            <div >
                <p>
                    <FaMapMarkerAlt size="20" />
                </p>
                <span>
                    {user.location}
                </span>
            </div>
            <div>
                <p>
                    <FaTwitter size="20" />
                </p>
                <span>
                    {user.twitter_username ? user.twitter_username : 'Not Available'}
                </span>
            </div>
            <div>
                <p>
                    <FaLink size="20" />
                </p>
                <span>
                    {user.blog ? user.blog : 'Not Available'}

                </span>
            </div>
        </section>
    )
}

export default index