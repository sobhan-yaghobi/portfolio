import React from "react"
import faMessage from "@/messages/fa.json"

import { TypeTechnicalSkillsProps } from "@/types/TechnicalSkill"

import Title from "../../modules/Title"

import TechnicalSkillList from "./TechnicalSkillList"
import TechnicalSkillContent from "./TechnicalSkillContent"

const TechnicalSkills: React.FC<TypeTechnicalSkillsProps> = ({ technicalSkills }) => {
  const { skills } = faMessage.header.item

  return technicalSkills.length ? (
    <section id="skill-list">
      <div className="mt-40" id="skills" />

      <Title size="lg" className="text-center">
        <h2 className="skill-list-title-child">{skills}</h2>
      </Title>

      <div className="my-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TechnicalSkillList technicalSkills={technicalSkills} />
        <TechnicalSkillContent />
      </div>
    </section>
  ) : null
}

export default TechnicalSkills
