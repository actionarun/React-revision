import { useContext } from "react";
import { UserContext } from "../UserContext";

function Navbar() {

  const user = useContext(UserContext);

  return <h1>Welcome {user}</h1>;
}

export default Navbar;