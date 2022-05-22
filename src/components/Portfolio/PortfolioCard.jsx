import React from "react";
import styles from "./PortfolioCard.module.css";

export function PortfolioCard(props){
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.img} alt={props.name}/>
      </div>
      <div className={styles.portfolioText}>
        <p className={styles.title}>{props.name}</p>
        <p>{props.summary}</p>
        <a href={props.code} target="_blank" className={styles.link}><button className="btn">Code</button></a>
        {props.link && <a href={props.link} target="_blank" className={styles.link}><button className="btn">Link</button></a>} 
      </div>
    </div>
  )
}