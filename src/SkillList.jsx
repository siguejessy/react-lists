import React from "react";
import SkillListItem from "./SkillListItem";

function SkillList(props) {
  return (
    <ul>
      {props.skills.map((s, idx) => (
        <SkillListItem skillname={s.name} skilllevel={s.level} key={idx} />
      ))}
    </ul>
  );
}

export default SkillList;
