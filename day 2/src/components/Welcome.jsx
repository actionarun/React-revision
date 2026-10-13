import React from 'react'

export default function Welcome() {
   function handleClick() {
    console.log("hello Arun");
   }
     
  return (
    <>
    
    <button onClick={handleClick}>say hello</button>
    </>
  )
}
