import React from "react";
export function Nav(){
  return(
    <div className="nav">
        <h1 id="mainTitle">db</h1>
        <div >
          <ul id="navLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
  )
}