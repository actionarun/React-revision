import { useState } from "react"

function Userinput() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]:e.target.value

  });
}


  return (
    <>
    <form>
        <input
  onChange={handleChange}      
  type="text"
  name="name"
  value={formData.name}
  placeholder="enter name"
/>

<input
  onChange={handleChange}
  type="email"
  name="email"
  value={formData.email}
  placeholder="enter email"
/>

<input
  onChange={handleChange}
  type="password"
  name="password"
  value={formData.password}
  placeholder="enter password"
/>
    </form>
 <p>Name: {formData.name}</p>
<p>Email: {formData.email}</p>
<p>Password: {formData.password}</p>
    
    </>
  )
}

export default Userinput