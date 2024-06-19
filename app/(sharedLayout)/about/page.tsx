import React from "react"

import AboutMeLanding from "@/components/templates/AboutMeLanding"
import AboutSection from "@/components/templates/AboutMeSection"
import Skills from "@/components/templates/Skills"

const page: React.FC = () => {
  return (
    <>
      <AboutMeLanding />
      <div className="mb-40" />

      <AboutSection />
      <div className="mb-40" />

      <Skills />
      <div className="mb-40" />
    </>
  )
}

export default page
