import React from "react";
import { skillsObject } from "./skillsObject";

export function Skills(){
  return(
    <div>
      <h2 className="sectionTitle" id="skills">Skills</h2>
      <div className="grid md:grid-cols-3 gap-4 place-content-evenly skillsContainer sm: grid-cols-2 gap-4">
        {skillsObject.map(skill=>{
          return <div>
            <img src={skill.imgURL} alt={skill.skillName +"logo"} className="imgSize" id="skillImage"/>
            <p>{skill.skillName}</p>
        </div>
        })
      }
      </div>
    </div>
  )
}