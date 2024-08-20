import React from "react"
import t from "@/messages/fa.json"
import { getProjectList } from "@/lib/fetcher/project"

import Title from "../modules/Title"
import ProjectCard from "../modules/projectCard/ProjectCard"

const ProjectList: React.FC = async () => {
  const projectList = await getProjectList()

  return projectList.length ? (
    <>
      <section id="project-list">
        <Title id="project-list-title-wrapper" size="lg" className="text-center">
          <h2 className="project-list-title-child">{t.header.item.projects}</h2>
          <h3 className="project-list-title-child w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
            {t.home.projects.desc}
          </h3>
        </Title>
        <div className="my-12 flex gap-10 overflow-hidden max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {projectList?.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  ) : null
}

export default ProjectList
