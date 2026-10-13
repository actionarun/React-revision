import React from 'react'
import { useState } from 'react';
function Password() {
    const [showPassword, setShowPassword] = useState(false);
    function handlePassword(){
        setShowPassword(!showPassword)
    }

  return (
    <div>
        <p>password: {showPassword ? "arun123" : "********"}</p>
        <button onClick={handlePassword}>
            {showPassword ? "Hide Password" : "Show Password"}

        </button>
     


    </div>
  )
}

export default Password