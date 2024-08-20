import { useState } from "react";
import "./NewSkillForm.css";

function NewSkillForm(props) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "3",
  });

  const handleAddSkill = (evt) => {
    evt.preventDefault();
    props.addSkill(newSkill);
    setNewSkill({ name: "", level: "3" });
  };

  const addNewSkill = (evt) => {
    const newSkillData = { ...newSkill, [evt.target.name]: evt.target.value };
    setNewSkill(newSkillData);
  };

  return (
    <form className="NewSkillForm" onSubmit={handleAddSkill}>
      Skill
      <input
        type="text"
        name="name"
        required
        value={newSkill.name}
        onChange={addNewSkill}
      ></input>
      Level
      <select
        name="level"
        required
        value={newSkill.level}
        onChange={addNewSkill}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">Add Skill</button>
    </form>
  );
}

export default NewSkillForm;
