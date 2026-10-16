import { useState } from "react"
function Rolechange() {
    const [user, setUser] = useState({
  name: "Arun",
  role: "Student"
});
function changeRole(){
    setUser({...user,
        role:"MernStack Developer"
    })
}
  return (
    <>
    <h1>name:{user.name}</h1>
    <h1>role:{user.role}</h1>
    <button onClick={changeRole}>change</button>
 
        
    
    
    
    
    </>
  )
}

export default Rolechange