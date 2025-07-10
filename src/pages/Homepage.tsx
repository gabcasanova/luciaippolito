import luciaPortrait from "../assets/luciaPortrait.png"

import { useTranslation } from "react-i18next"
import Page from "../components/layout/Page"

const Homepage = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {/* Homepage introduction section */}
      <div className="m-7 mt-30 flex">
        {/* Lucia Image */}
        <div>
          <img className=" w-[300px]" src={luciaPortrait} />
        </div>

        {/* Text */}
        <div className="flex flex-col grow items-center justify-center">
          {/* Hello */}
          <p className="mb-5 text-3xl font-bold">{ t("homepage.intro.hello") }</p>
          
          {/* Bullet Points */}
          <div className="flex items-center">
            <div className="text-center">
              <p className="text-6xl">🎓</p>
              <p className="text-[20px]">{ t("homepage.intro.uni") }</p>
            </div>
            <p className="ml-3 mr-3 text-2xl">&bull;</p>
            <div className="text-center">
              <p className="text-6xl">🏛️</p>
              <p className="text-[20px]">{ t("homepage.intro.communication") }</p>
            </div>
            <p className="ml-3 mr-3 text-2xl">&bull;</p>
            <div className="text-center">
              <p className="text-6xl">🎥</p>
              <p className="text-[20px]">{ t("homepage.intro.production") }</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 font-bold text-lg">{ t("homepage.intro.desc") }</p>
        </div>
      </div>

      {/* Articles */}
      <div className="m-5 mt-30">
        <h1 className="font-bold text-center text-5xl text-lucia-brighterred " >༻ Matérias ༺ </h1>
        <p className="mt-2 text-center">Nesta seção, você encontra uma seleção de reportagens e textos produzidos ao longo da minha trajetória acadêmica e profissional. </p>
      </div>
    </Page>
  )
}

export default Homepage