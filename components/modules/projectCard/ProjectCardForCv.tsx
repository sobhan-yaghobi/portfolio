import React from "react"

import { TypeProjectCardForCvProps } from "@/lib/types/cv"

import Image from "next/image"
import Link from "next/link"

const ProjectCardForCv: React.FC<TypeProjectCardForCvProps> = ({ project }) => {
  return (
    <div className="card">
      <div className="card-body px-3 py-2 grid grid-cols-6 gap-3">
        <div className="col-span-1 justify-self-center">
          <Image
            width={80}
            height={80}
            src={"/packages/github.svg"}
            className="w-full max-w-14"
            alt="github"
          />
        </div>
        <div className="col-span-5 [&>*]:mt-3 first:[&>*]:mt-0">
          <h3 className="font-dana text-xl">{project.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {project?.technicalSkillList?.map((skill) => (
              <li key={skill.id} className="badge badge-sm">
                {skill.name}
              </li>
            ))}
          </ul>
          <section>
            {project.link && (
              <button className="btn btn-sm btn-link">
                <Link href={project.link}>مشاهده آنلاین</Link>
              </button>
            )}
            {project.source && (
              <button className="btn btn-sm btn-link">
                <Link href={project.source}>مشاهده سورس کد</Link>
              </button>
            )}
          </section>
          <div>{project.description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardForCv
