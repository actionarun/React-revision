import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)

    function increaseCount (){
        setCount((prev)=>prev+1)
    }
    function decreaseCount (){
        setCount((prev)=>prev-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <>

    <h1>counter:{count}</h1>
    <button onClick={increaseCount} >increse</button>
    <button onClick={decreaseCount}>decrece</button>
    <button onClick={reset}>reset</button>



    </>
  )
}

export default Counter