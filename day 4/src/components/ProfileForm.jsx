import React, { useState } from 'react'

function ProfileForm() {
    const [user,setUser]=useState({
        firstname:"",
        city:""
    })
    const [errors, setErrors] = useState({
  firstname: "",
  city: ""
});
    const [success, setSuccess] = useState("")
     function handleChange(e) {
    setUser({
        ...user,[e.target.name]:e.target.value
    })
}
function handleSubmit(e) {
  e.preventDefault();

  setSuccess("");

  const newErrors = {
    firstname: "",
    city: ""
  };

  if (user.firstname.trim() === "") {
    newErrors.firstname = "First name is required";
  }

  if (user.city.trim() === "") {
    newErrors.city = "City is required";
  }

  if (newErrors.firstname || newErrors.city) {
    setErrors(newErrors);
    return;
  }

  setErrors({
    firstname: "",
    city: ""
  });

  setSuccess("User registered successfully");
  
  setUser({
    firstname: "",
    city: ""
  });
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

    <p>{success}</p>
    <p>{errors.firstname}</p>
    <p>{errors.city}</p>
   




    </>
  )
}

export default ProfileForm