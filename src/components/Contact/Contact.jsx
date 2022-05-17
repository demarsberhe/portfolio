import React from "react";
export function Contact(){
  return(
      <div className="formContainer">
      <h2 id="contact" className="sectionTitle">Contact</h2>
      <form className="formField">
        <label for="name"> Name</label>
        <br/>
        <input type="text" id="name"/>
        <br/>
        <label for="email">Email</label>
        <br/>
        <input type="text" id="email"/>
        <br/>
        <label for="subject">Subject</label>
        <br/>
        <input type="text" id="subject"/>
        <br/>
        <label for="message">Message</label>
        <br/>
        <input type="text" id="message"/>
        <br/>
        <input type="submit"></input>
      </form>
    </div>

  )
}