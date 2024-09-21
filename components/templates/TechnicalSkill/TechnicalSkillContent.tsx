"use client"

import React from "react"
import useTechnicalSkill from "@/hooks/store/useTechnicalSkill"

import { ArrowUpRight } from "lucide-react"

import Link from "next/link"

const TechnicalSkillContent: React.FC = () => {
  const { technicalSkill } = useTechnicalSkill()

  return technicalSkill ? (
    <nav id="main-skill-content">
      <p id={technicalSkill.name}>{technicalSkill.description}</p>
      {technicalSkill.projectList?.length ? (
        <div className="mt-3">
          <h3 className="text-xl font-dana">در پروژه های زیر استفاده شده</h3>
          <ul className="mt-2 flex flex-wrap gap-6">
            {technicalSkill.projectList.map((project) => (
              <Link href={project.source}>
                <li className="btn btn-link px-0">{project.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
      <Link href={technicalSkill.link} className="btn mt-3">
        Read More
        <ArrowUpRight className="icon" />
      </Link>
    </nav>
  ) : null
}

export default TechnicalSkillContent
