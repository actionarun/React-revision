import React from 'react'
import { useState } from 'react';
function Topics() {
    const [skills, setSkills] = useState([
  "HTML",
  "CSS"
]);

function update(){
    setSkills([...skills,"react"])
}

  return (
    <>
    {skills.map((topic)=> <h1>{topic}</h1>
    )}
    <button onClick={update}>add react</button>
    
    </>
  )
}

export default Topics