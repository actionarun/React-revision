import React from 'react'

function Student({  name, mark }) {
  return (
    <>
      <h1>Name: {name}</h1>
      <p>Mark: {mark}</p>
      <p>Result: {mark >= 40 ? "Pass" : "Fail"}</p>
    </>
  )
}

export default Student