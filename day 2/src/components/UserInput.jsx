import { useState } from "react";

function UserInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Your Name: {name}</h2>
        <h2>Your Email: {email}</h2>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserInput;