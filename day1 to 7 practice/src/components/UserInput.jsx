import React, { useState } from 'react'

function UserInput() {
    const [name,setName] =useState("")
  return (
    <div>
        <input 
        type='text'
        placeholder='enter your name'
        value={name}
        onChange={(e)=>setName(e.target.value)}

        />
        <h1>hello:{name}</h1>
       



    </div>
  )
}

export default UserInput