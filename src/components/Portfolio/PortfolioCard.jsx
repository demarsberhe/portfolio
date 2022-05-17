import React from "react";

export function PortfolioCard(props){
  return (
    <div>
      <div>
        <img src="" alt="project image"/>
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.summary}</p>
      </div>
      <a href={props.link} target="_blank">Code</a>
    </div>
  )
}