import React from "react";
export function Nav(){
  return(
    <div className="nav">
        <h1 id="mainTitle">Demars Berhe</h1>
        <div >
          <ul className="nav">
            <li>About</li>
            <li>Portfolio</li>
            <li><a href="#skills">Skills</a></li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  )
}