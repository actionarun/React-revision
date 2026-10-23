import { useEffect,useState } from "react";
import Users from "./components/Users";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  // const timer = setInterval(() => {
  //   console.log("Running...");
  // }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
  return <>
  <Users />
  {/* <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button> */}
  </>;
}
export default App
