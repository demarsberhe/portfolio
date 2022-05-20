import React from "react";
import {PortfolioCard} from "./PortfolioCard";
import recipes from "../../images/recipes.png"
import product from "../../images/product.png";
import weather from "../../images/weather.png";
export function Portfolio(){
  return(
    <div className="portfolioSection">
      <h2 id="portfolio" className="sectionTitle">Portfolio</h2>
      <div className="portfolioContainer">
      <PortfolioCard
            key={"project-1"}
            name={"Recipes Project"}
            summary={"A React, Firebase, Next.js application."}
            link={"https://github.com/demarsberhe/react-recipes-project/tree/firebase-implementation"}
            img={recipes}
          />
          <PortfolioCard
            key={"project-2"}
            name={"Product Landing Page"}
            summary={"Replicate design of Kith product landing page. A Bootstrap and SASS application."}
            link={"https://github.com/demarsberhe/replicate-product-page/tree/main-product"}
            img={product}
          />
          <PortfolioCard
            key={"project-3"}
            name={"Weather Application"}
            summary={"Provides upcoming weather forecast depending on the location entered by the user. An AccuWeather API, JavaScript, Bootstrap application."}
            link={"https://github.com/demarsberhe/recipes/tree/js-implementation"}
            img={weather}
          />
      </div>
    </div>
  )

}