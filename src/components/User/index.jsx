import React from 'react'
import UserHeader from '@components/User/UserHeader'
import UserBio from '@components/User/UserBio'
import UserFooter from '@components/User/UserFooter'
import styles from './User.module.scss'

const index = ({ user }) => {
  return (
    <>
      <article className={styles.User}>
        <UserHeader user={user} />
        <UserBio user={user} />
        <UserFooter user={user} />
      </article>
    </>
  )
}

export default index