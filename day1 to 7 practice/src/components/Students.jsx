
// import { useState } from "react";

// function Students() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "Arun" },
//     { id: 2, name: "Ravi" },
//     { id: 3, name: "Kumar" }
//   ]);

//   function removeStudent(id) {
//     setStudents(
//       students.filter((student) => student.id !== id)
//     );
//   }

//   return (
//     <>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h1>{student.name}</h1>

//           <button onClick={() => removeStudent(student.id)}>
//             Remove
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Students;

import React from 'react'

function Students({id,name, RemoveStudent}) {
  return (
    <div>
      <h1>name:{name}</h1>
      <button onClick={() => RemoveStudent(id)}>DELETE</button>


    </div>
  )
}

export default Students