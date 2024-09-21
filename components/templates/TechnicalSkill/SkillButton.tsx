"use client"

import React from "react"
import { cn } from "@/lib/utils"
import useTechnicalSkill from "@/hooks/store/useTechnicalSkill"

import { SkillButtonProps } from "@/types/TechnicalSkill"

import Image from "next/image"

const SkillButton: React.FC<SkillButtonProps> = ({ skill, className }) => {
  const { technicalSkill, setTechnicalSkill } = useTechnicalSkill()
  return (
    <button
      className={cn(
        `btn border-2`,
        skill.id === technicalSkill?.id
          ? "outline-active hover:outline-active"
          : "hover:outline-active",
        className
      )}
      onClick={() => setTechnicalSkill(skill)}
    >
      <Image
        className="icon size-7"
        width={30}
        height={30}
        src={skill.image}
        alt={`${skill.name}-image`}
      />
      {skill.name}
    </button>
  )
}

export default SkillButton
