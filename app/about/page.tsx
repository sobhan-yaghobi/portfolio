import React from "react"

import AboutMeLanding from "../components/templates/AboutMeLanding"
import AboutSection from "../components/templates/AboutMeSection"
import Skills from "../components/templates/Skills"

const page: React.FC = () => {
  return (
    <>
      <AboutMeLanding />
      <AboutSection />
      <div className="mt-40">
        <Skills />
      </div>
    </>
  )
}

export default page
