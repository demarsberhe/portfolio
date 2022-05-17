import React from "react";
import styles from "./Nav.module.css";
export function Nav(){
  return(
    <div className={styles.nav}>
        <h1 id={styles.mainTitle}>Demars Berhe</h1>
        <div >
          <ul className={styles.nav}>
            <li>About</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  )
}