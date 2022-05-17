import React from "react";
import {PortfolioItems} from "./PortfolioItems";
import {PortfolioCard} from "./PortfolioCard";

export function Portfolio(){
  return(
    <div className="portfolioSection">
      <h2 id="portfolio" className="sectionTitle">Portfolio</h2>
      <div className="portfolioContainer">
        {PortfolioItems.map(item=>{
          return <PortfolioCard
            name={item.name}
            summary={item.summary}
            link={item.link}
          />
        })
      }
      </div>
    </div>
  )

}