// import Counter from "./components/Counter";
// import Profile from "./components/Profile";
// import Rolechange from "./components/Rolechange"
// import Topics from "./components/Topics"
// import UserInput from "./components/UserInput"
// import Products from "./components/Products"
// import Students from "./components/Students"
import { useState } from "react";
import Students from "./components/Students";


function App() {
  const [students, setStudents] = useState([
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
]);
function removeStudent(id){
  setStudents(
    students.filter((student)=>student.id !== id)
  )
}


  // const name = "Arun";
  // const mark = 75;
  // let name="Arun"
  // let role="JOB Seeker"
  // let city="chennai"
//   const skills = [
//   { id: 1, name: "HTML" },
//   { id: 2, name: "JavaScript" },
//   { id: 3, name: "React" }
// ];
 

  return (
    <>
    {students.map((student)=>(
      <Students key={student.id} id={student.id} name={student.name} RemoveStudent={removeStudent} />
    ))

    }
    {/* <UserInput /> */}
    {/* <Topics /> */}
    {/* <Rolechange /> */}
    {/* {skills.map((skill)=>(
     <Profile key={skill.id} name={skill.name}  />
    )) */}
    {/* <Students /> */}
    {/* <Products /> */}

    {/* } */}
    {/* <Profile name={name} role={role} city ={city} /> */}
    {/* <Profile name={name} mark={mark} /> */}
    {/* <Counter /> */}
    
    </>
  )
}

export default App
