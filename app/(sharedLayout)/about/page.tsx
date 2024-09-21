import React from "react"
import { getTechnicalSkills } from "@/services/technicalSkill"

import AnimateElement from "@/components/modules/Animate/TemplateAnimate"
import Landing from "@/components/templates/about/landing/Landing"
import LifeGlimpseAndSoftSkills from "@/components/templates/about/LifeGlimpseAndSoftSkills"
import TechnicalSkillList from "@/components/templates/TechnicalSkill/TechnicalSkills"

const page: React.FC = async () => {
  const technicalSkills = await getTechnicalSkills()
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
        <TechnicalSkillList technicalSkills={technicalSkills} />
      </AnimateElement>
      <div className="mb-40" />
    </>
  )
}

export default page
