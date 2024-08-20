import "./styles.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const [showSkills, setShowSkills] = useState(true);

  return (
    <>
      <div className="App">
        <h1>Skills List</h1>
        {showSkills && <SkillList skills={skills} />}
        <button
          onClick={() => {
            setShowSkills(!showSkills);
          }}
        >
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>
        <hr />
        <NewSkillForm addSkill={addSkill} />
        <hr />
      </div>
    </>
  );
}

export default App;
