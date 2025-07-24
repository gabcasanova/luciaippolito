import 'animate.css';

// Import radios from JSON
import radios from "../../content/radio.json"

// Identify the logos from different news portals 
import ucpelLogo from "../../assets/logos/ucpel.png"
const logos: Record<string, string> = {
  ucpel: ucpelLogo
};

import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Radio = () => {
  const { t } = useTranslation()

  // Number of currently displayed radios &
  // how many radios are in the JSON.
  const [numberOfRadios, setNumberOfRadios] = useState(9)
  const howManyRadios = radios.length

  // More radios button action
  const moreRadiosButtonRef = useRef<HTMLDivElement | null>(null)
  const moreRadiosButtonAction = () => {
    setNumberOfRadios(numberOfRadios + 5);

    // Scroll to button smoothly
    // Delay scroll to ensure new radios are rendered first
    setTimeout(() => {
      moreRadiosButtonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100) // Adjust timing if needed
  }

  return (
    <div className="m-10 grid grid-cols-5 gap-4"> {/* Create a grid of news radios */}
    
      {/* Create individual news radios from JSON */}
      {radios.slice(0, numberOfRadios).map((radio) => (
        <a key={radio.id} href={radio.link} target="blank">
          <div 
               className="flex flex-col m-3 w-[250px] h-[250px]
                          hover:cursor-pointer hover:underline decoration-white
                          hover:brightness-110 transition-all bg-cover bg-center
                          hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                          animate__animated animate__fadeIn animate__fast"
               style={{backgroundImage: `url("${radio.img}")`}}>

            {/* Set the logo from the respective news portal */}
            <img className="ml-auto w-[50px]" 
                 src={radio.portal ? logos[radio.portal] : ucpelLogo}/>

            <div className="grow"/> {/* Spacer between logo & article title*/}

            {/* Article title*/}
            <p className="p-2 text-white bg-lucia-brightred">
              {radio.title}
            </p>
          </div>
        </a>
      ))}

      {/* More Radios Button */}
      { numberOfRadios < howManyRadios && (
        <div className="flex flex-col m-3 w-[250px] h-[250px]
                        items-center justify-center
                        hover:cursor-pointer hover:underline decoration-white
                        hover:brightness-110 transition-all bg-cover bg-center
                        hover: shadow-[rgba(0,0,0,0.5)] hover:shadow-2xl
                        bg-lucia-brightred hover:bg-lucia-red"
            ref={ moreRadiosButtonRef }
            onClick={ moreRadiosButtonAction }>
          <p className="text-white text-2xl">{ t("homepage.radio.more") }</p>
        </div>
      )}

    </div>
  )
}

export default Radio