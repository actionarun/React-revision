import { useState } from "react";
function NameInput({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default NameInput;