import { useState } from "react";
import Student from "./components/Student";
// import Profile from "./components/Profile"
// import NameDisplay from "./components/NameDisplay.jsx";
// import NameInput from "./components/NameInput";
function App() {
 const [students, setStudents] = useState([
    { id: 1, name: "Arun", mark: 80 },
    { id: 2, name: "Ravi", mark: 35 },
    { id: 3, name: "Kumar", mark: 65 }
  ]);

  function removeStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

 
//  const [name, setName] = useState("");
  return (
    <>
     {/* <Profile/> */}
      {/* <NameInput
        name={name}
        setName={setName}
      />

      <NameDisplay
        name={name}
      /> */}
      {students.map((student)=>
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          mark={student.mark}
          remove={removeStudent}
        />
      ))}

      )

      }


    </>
  )
}

export default App
