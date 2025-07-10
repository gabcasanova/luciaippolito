// Import articles from JSON
import articles from "../../content/articles.json"

// Identify the logos from different news portals 
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  ucpel: ucpelLogo
};

import { useState } from "react";

const Articles = () => {
  const [numberOfArticles, setNumberOfArticles] = useState(4)
  const howManyArticles = articles.length

  return (
    <div className="m-10 grid grid-cols-5 gap-4"> {/* Create a grid of news articles */}
      {/* Create individual news articles from JSON */}
      {articles.slice(0, numberOfArticles).map((article) => (
        <a href={article.link} target="blank">
          <div key={article.id} 
               className="flex flex-col m-3 w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl"
               style={{backgroundImage: `url(${article.img})`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={article.portal ? logos[article.portal] : ucpelLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {article.title}
            </p>
          </div>
        </a>
      ))}

      {/**/}
      { numberOfArticles < howManyArticles && (
        <div className="flex flex-col m-3 w-[250px] h-[250px]
                        items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred"
            onClick={() => {
                setNumberOfArticles(numberOfArticles+5)
            }}>
          <p className="text-white text-2xl">Mais artigos...</p>
        </div>
      )}

    </div>
  )
}

export default Articles