import React from "react"
import { getTechnicalSkillList } from "@/services/technicalSkill"

import AnimateElement from "@/components/modules/AnimateElement"
import Landing from "@/components/templates/about/landing/Landing"
import LifeGlimpseAndSoftSkills from "@/components/templates/about/LifeGlimpseAndSoftSkills"
import TechnicalSkillList from "@/components/templates/TechnicalSkillList"

const page: React.FC = async () => {
  const technicalSkillList = await getTechnicalSkillList()
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

      <AnimateElement selectedAnimationName="animateTechnicalSkillList">
        <TechnicalSkillList technicalSkillList={technicalSkillList} />
      </AnimateElement>
      <div className="mb-40" />
    </>
  )
}

export default page
