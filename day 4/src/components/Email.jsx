
import { useState } from 'react';
function Email() {
    const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  city:""
});
const [errors, setErrors] = useState({
  name: "",
  email: "",
  password: "",
  city:""
});
const [success, setSuccess] = useState("");

function handleChange(e){
setUser({...user,[e.target.name]:e.target.value})

}
function handleSubmit(e) {
  e.preventDefault();

  setSuccess("");

  const newErrors = {
    name: "",
    email: "",
    password: "",
    city: ""
  };

  if (user.name.trim() === "") {
    newErrors.name = "Name is required";
  }

  if (user.email.trim() === "") {
    newErrors.email = "Email is required";
  } else if (!user.email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }

  if (user.password.trim() === "") {
    newErrors.password = "Password is required";
  } else if (user.password.length < 6) {
    newErrors.password =
      "Password must be at least 6 characters";
  }

  if (user.city.trim() === "") {
    newErrors.city = "City is required";
  }

  if (
    newErrors.name ||
    newErrors.email ||
    newErrors.password ||
    newErrors.city
  ) {
    setErrors(newErrors);
    return;
  }

  setErrors({
    name: "",
    email: "",
    password: "",
    city: ""
  });

  setSuccess("Registration successful");

  setUser({
    name: "",
    email: "",
    password: "",
    city: ""
  });
}

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input
  type="text"
  name="name"
  value={user.name}
  onChange={handleChange}
  placeholder='enter your Name'
/>
<p>{errors.name}</p>

<input
  type="email"
  name="email"
  value={user.email}
  onChange={handleChange}
  placeholder='enter your Email'
/>
<p>{errors.email}</p>

<input
  type="password"
  name="password"
  value={user.password}
  onChange={handleChange}
  placeholder='enter your password'
/>
<p>{errors.password}</p>
<input
type='text'
name='city'
placeholder='enter your place'
value={user.city}
onChange={handleChange} />
<p>{errors.city}</p>
<button type='submit'>submit</button>
<p>{success}</p>
    </form>
    

    
    
    </>
  )
}

export default Email