import React from "react";
export function Nav(){
  return(
    <div className="nav">
        <h1 id="mainTitle" className="text-center sm:text-left">Demars Berhe</h1>
        <div >
          <ul className="nav">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
  )
}