"use client"

import React, { useState } from "react"
import faMessage from "@/messages/fa.json"

import { TypeTechnicalSkill, TypeTechnicalSkillsProps } from "@/lib/types/technicalSkill.type"

import { ArrowUpRight } from "lucide-react"

import Title from "../modules/Title"
import Link from "next/link"
import Image from "next/image"

const Skills: React.FC<TypeTechnicalSkillsProps> = ({ technicalSkillList }) => {
  const { skills } = faMessage.header.item
  const [mainSkill, setMainSkill] = useState<TypeTechnicalSkill>(
    technicalSkillList.at(0) || ({} as TypeTechnicalSkill)
  )

  return technicalSkillList.length ? (
    <section id="skill-list">
      <div className="mt-40" id="skills" />
      <Title size="lg" className="text-center">
        <h2 className="skill-list-title-child">{skills}</h2>
      </Title>
      <div className="my-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ul className="flex flex-wrap gap-3">
          {technicalSkillList?.map((skill) => (
            <li className="skill-item" key={skill.id}>
              <Link href={`#${skill.name}`}>
                <button
                  className={`btn border-2 ${
                    skill.id === mainSkill?.id
                      ? "outline-active hover:outline-active"
                      : "hover:outline-active"
                  }`}
                  onClick={() => setMainSkill(skill)}
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
              </Link>
            </li>
          ))}
        </ul>
        <nav id="main-skill-content">
          <p id={mainSkill.name}>{mainSkill.description}</p>
          <div className="my-3">
            <h3 className="text-xl font-dana">در پروژه های زیر استفاده شده</h3>
            <ul className="mt-2 flex flex-wrap gap-6">
              {mainSkill?.projectList?.map((project) => (
                <Link href={project.source}>
                  <li className="btn btn-link px-0">{project.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <Link href={mainSkill.link} className="btn">
            Read More
            <ArrowUpRight className="icon" />
          </Link>
        </nav>
      </div>
    </section>
  ) : null
}

export default Skills
