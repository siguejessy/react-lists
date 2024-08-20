import React from "react";
import "./SkillListItem.css";

function SkillListItem(props) {
  return (
    <div className="SkillListItem">
      {props.skillname}
      <div className="level">LEVEL {props.skilllevel}</div>
    </div>
  );
}

export default SkillListItem;
