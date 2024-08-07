import React from "react"
import { getSkillList } from "@/lib/fetcher/skill"

import AboutMeLanding from "@/components/templates/AboutMeLanding"
import AboutSection from "@/components/templates/AboutMeSection"
import Skills from "@/components/templates/Skills"

const page: React.FC = async () => {
  const skillList = await getSkillList()
  return (
    <>
      <AboutMeLanding />
      <div className="mb-40" />

      <AboutSection />
      <div className="mb-40" />

      <Skills skillList={skillList} />
      <div className="mb-40" />
    </>
  )
}

export default page
