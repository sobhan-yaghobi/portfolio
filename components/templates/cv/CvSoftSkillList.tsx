import React from "react"

import { TypeCvSoftSkillListProps } from "@/types/Cv"

import Title from "../../modules/Title"

const CvSoftSkillList: React.FC<TypeCvSoftSkillListProps> = ({ softSkillList }) => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
      <Title size="md">
        <h3>مهارت های نرم</h3>
      </Title>
      <ul className="[&>*]:mt-3 first:[&>*]:mt-0">
        {softSkillList?.map((softSkill) => (
          <li key={softSkill.id} className="flex">
            <span className="text-base">{softSkill.name}</span>
            <div className="rating flex flex-1 gap-1 justify-end">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name={`${softSkill.name}-rating`}
                    className="mask mask-circle"
                    defaultChecked={index + 1 <= softSkill.score}
                    disabled
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvSoftSkillList
