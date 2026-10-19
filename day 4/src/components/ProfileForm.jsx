import React, { useState } from 'react'

function ProfileForm() {
    const [user,setUser]=useState({
        firstname:"",
        city:""
    })
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
     function handleChange(e) {
    setUser({
        ...user,[e.target.name]:e.target.value
    })
}
function handleSubmit(e) {
  e.preventDefault()
  setSuccess("");
if (user.firstname.trim() === "") {
    setError("First name is required");
    return;
}
if (user.city.trim() === "") {
    setError("city is required");
    return;
}

setError("");

console.log(user)

setUser({
  firstname: "",
  city: ""
});
setSuccess("Form submitted successfully");
}


  return (
    <>
    <form onSubmit={handleSubmit}>
         <input type="text"
    onChange={handleChange}
    name='firstname'
    value={user.firstname} 
    placeholder='enter your first name'/>

    <input 
    onChange={handleChange}
    type='text'
    name='city'
    value={user.city}
    placeholder='enter your city'/>

    <button type="submit">Submit</button>

    <h1>First Name:{user.firstname}</h1>
    <h2>city:{user.city}</h2>


    </form>

    <p>{error}</p>
    <p>{success}</p>
   




    </>
  )
}

export default ProfileForm