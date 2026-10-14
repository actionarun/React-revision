import { useState } from "react"
function Profile() {
    const [user, setUser] = useState({
  name: "Arun",
  role: "Student"
});

function changeRole() {
  setUser({
    ...user,
    role: "MERN Developer"
  });
}
  return (
    <>
    <h2>Name:{user.name}</h2>
    <h2>Role:{user.role}</h2>
    <button onClick={changeRole}>change role</button>
    
    
    </>
  )
}

export default Profile