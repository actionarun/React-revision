import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  function removeSkill() {
    setSkills(
      skills.filter((skill) => skill !== "CSS")
    );
  }

  return (
    <div>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <button onClick={removeSkill}>
        Remove CSS
      </button>
    </div>
  );
}

export default Skills;