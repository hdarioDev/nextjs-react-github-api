import React from 'react'

const index = ({ user }) => {
  return (
    <>
      <article>
        <h2>{user.login}</h2>
      </article>
    </>
  )
}

export default index