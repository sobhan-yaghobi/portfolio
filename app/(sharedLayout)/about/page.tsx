import React from "react"
import { getSkillList } from "@/lib/fetcher/skill"

import AnimateElement from "@/components/modules/AnimateElement"
import Landing from "@/components/templates/aboutMe/landing/Landing"
import LifeGlimpseAndSoftSkills from "@/components/templates/aboutMe/LifeGlimpseAndSoftSkills"
import Skills from "@/components/templates/Skills"

const page: React.FC = async () => {
  const skillList = await getSkillList()
  return (
    <>
      <AnimateElement selectedAnimationName="animateAboutMeLanding">
        <Landing />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateLifeGlimpseAndSoftSkills">
        <LifeGlimpseAndSoftSkills />
      </AnimateElement>
      <div className="mb-40" />

      <Skills skillList={skillList} />
      <div className="mb-40" />
    </>
  )
}

export default page
