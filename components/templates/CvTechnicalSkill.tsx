import React from "react"
import { random } from "gsap"

import { TypeCvTechnicalSkillProps } from "@/lib/types/cv"

import Title from "../modules/Title"
import Image from "next/image"

const CvTechnicalSkill: React.FC<TypeCvTechnicalSkillProps> = ({ technicalSkillList }) => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-6 first:[&>*]:ml-0">
      <Title size="md">
        <h3>مهارت های فنی</h3>
      </Title>
      <ul>
        {technicalSkillList?.map((technicalSkill) => (
          <li key={technicalSkill.id} dir="ltr">
            <section className="max-h-12 p-2 py-3 rounded-lg flex items-center justify-between hover:bg-color">
              <div className="flex">
                <Image height={30} width={30} alt="package-image" src={technicalSkill.image} />
                <h5 className="text-lg font-iran-sans ml-3">{technicalSkill.name}</h5>
              </div>
              <span>{technicalSkill.experienceYearTime}</span>
            </section>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvTechnicalSkill
