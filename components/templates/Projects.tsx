import React from "react"
import t from "@/messages/fa.json"

import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"
import { env } from "process"
import { TypeProject } from "@/lib/types/project.type"

const Projects: React.FC = async () => {
  const projectList = (await fetch(`${env.NEXT_PUBLIC_API_URL}/project`, {
    next: { revalidate: 60 },
  }).then((res) => res.json())) as TypeProject[]

  return projectList.length ? (
    <>
      <section id="projectList">
        <Title size="lg" className="text-center">
          <h2>{t.header.item.projects}</h2>
          <h3 className="w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
            {t.home.projects.desc}
          </h3>
        </Title>
        <div className="my-12 flex gap-10 max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {projectList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  ) : null
}

export default Projects
