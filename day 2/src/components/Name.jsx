import { useState } from "react";

function Name() {
  const [name, setName] = useState("Arun");

  function changeName() {
    setName("Ravi");
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeName}>
        Change Name
      </button>
    </>
  );
}

export default Name;