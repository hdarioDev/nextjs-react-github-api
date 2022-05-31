import React from 'react'
import styles from './User.module.scss'

const index = ({ user }) => {
  console.log("me enviar a render ", user);
  return (
    <>
      <article className={styles.User}>
        <h2>{user.login}</h2>
      </article>
    </>
  )
}

export default index