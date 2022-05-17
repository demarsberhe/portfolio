import React from "react";
import { skillsObject } from "./skillsObject";

export function Skills(){
  return(
    <div>
      <h2 className="sectionTitle" id="skills">Skills</h2>
      <div className="grid grid-cols-3 gap-4 place-content-evenly skillsContainer ">
        {skillsObject.map(skill=>{
          return <div>
            <img src={skill.imgURL} alt={skill.skillName +"logo"} className="imgSize"/>
            <p>{skill.skillName}</p>
        </div>
        })
      }
      </div>
    </div>
  )
}