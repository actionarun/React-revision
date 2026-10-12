//  import Profile from './components/Profile'
// import Users from "./components/Users";

import Student from "./components/Student";

// import Product from './components/Product'
function App() {
//   const users = [
//   { id: 1, name: "Arun", role: "MERN Developer" },
//   { id: 2, name: "Ravi", role: "Frontend Developer" },
//   { id: 3, name: "Kumar", role: "Backend Developer" }
// ];

const students = [
  { id: 1, name: "Arun", mark: 80 },
  { id: 2, name: "Ravi", mark: 35 },
  { id: 3, name: "Kumar", mark: 65 }
];


  return (
    <>
    
{/* 
     <Profile name ="arun" work="MERN stack developer" place ="Chennai"/>
    <Profile name ="ravi" work="front end developer" place ="Bangalore"/> */}
    
 {/* <Product name="Laptop" price={50000} stock={5} />

      <Product name="Phone" price={20000} stock={0} />

      <Product name="Headphone" price={5000} stock={10} /> */}

     {/* {users.map((user) => (
      <Users key={user.id} name={user.name} role={user.role} />
     )) } */}

      {students.map((student) => (
        <Student key={student.id} name={student.name} mark={student.mark} />
      ))}


    </>
  )
}

export default App
