import React from "react"
import { random } from "gsap"

import { TypeCvTechnicalSkillProps } from "@/lib/types/cv"

import Title from "../modules/Title"

const CvTechnicalSkill: React.FC<TypeCvTechnicalSkillProps> = ({ technicalSkillList }) => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-6 first:[&>*]:ml-0">
      <Title size="md">
        <h3>مهارت های فنی</h3>
      </Title>

      {technicalSkillList?.map((technicalSkill) => (
        <div key={technicalSkill.id}>
          <h5 className="text-base font-bold mr-3">{technicalSkill.name}</h5>
          <div className="flex-1 relative">
            <span>{technicalSkill.experienceYearTime}</span>
            <progress
              className="progress progress-primary h-5 mt-1"
              value={70}
              max="100"
              aria-label={`${technicalSkill.name}`}
            />
          </div>
        </div>
      ))}

      <ul className="flex flex-wrap gap-2">
        {[
          "Javascript",
          "Typescript",
          "React Js",
          "Next Js",
          "Zod",
          "React Hook Form",
          "Material Ui",
          "CSS",
          "SASS",
          "NPM",
          "SupaBase",
          "Vite",
          "Lodash",
          "Prisma",
          "BootStrap",
        ].map((item, index) => (
          <li key={index} className="badge badge-lg">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvTechnicalSkill
