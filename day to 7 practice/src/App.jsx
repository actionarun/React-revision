import Profile from "./components/Profile";

function App() {
  // const name = "Arun";
  // const mark = 75;
  // let name="Arun"
  // let role="JOB Seeker"
  // let city="chennai"
  const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" }
];
 

  return (
    <>
    {skills.map((skill)=>(
     <Profile key={skill.id} name={skill.name}  />
    ))

    }
    {/* <Profile name={name} role={role} city ={city} /> */}
    {/* <Profile name={name} mark={mark} /> */}
    
    </>
  )
}

export default App
