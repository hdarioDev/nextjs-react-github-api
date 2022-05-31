import React from 'react'
import UserHeader from '@components/User/UserHeader'
import styles from './User.module.scss'

const index = ({ user }) => {
  console.log("me enviar a render ", user);
  return (
    <>
      <article className={styles.User}>
        <UserHeader user={user} />
      </article>
    </>
  )
}

export default index