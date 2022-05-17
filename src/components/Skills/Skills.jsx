import React from "react";
import styles from "./Skills.module.css";
let skillsObject=[
  {
  skill:"HTML",
  imgURL:"https://www.w3.org/html/logo/img/mark-word-icon.png" 

}]
export function Skills(){
  return(
    <div>
      <h2>Skills</h2>
      <div className>
        <img src={skillsObject[0].imgURL} alt="HTML"/>
        <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-1024x640.png" alt="CSS"/>
        <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="SASS"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433" alt="JavaScript"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" alt="React"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="Next.js"/>
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="ContextAPI"/>
        <img src="https://www.agnosticdev.com/sites/default/files/2016-01/npm-logo_1.png" alt="npm"/>
        <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="Node.js"/>
        <img src="https://seeklogo.com/images/G/gulp-logo-415632861B-seeklogo.com.png" alt= "Gulp"/>
        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase"/>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt ="GitHub"/>
      </div>
    </div>
    
  )
}