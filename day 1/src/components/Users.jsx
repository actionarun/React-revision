import React from 'react'

function Users({ key, name, role }) {
  return (
    <>
    <h1>name:{name}</h1>
    <p>role:{role}</p>
    </>
  )
}

export default Users