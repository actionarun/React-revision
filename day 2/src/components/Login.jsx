import React from 'react'
import { useState } from 'react'

function Login() {

    const [status, setStatus] = useState("Logged Out");

    function handleLogin() {
        setStatus("Logged In");
    }
  return (
    <>
    <h4>Status: {status}</h4>
    <button onClick={handleLogin}>Login</button>    
    </>
  )
}

export default Login