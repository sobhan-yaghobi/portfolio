import React from "react"

import { TypeCvProjectListProps } from "@/lib/types/cv"

import Title from "../modules/Title"
import ProjectCard from "../modules/projectCard/ProjectCard"

const CvProjectList: React.FC<TypeCvProjectListProps> = ({ projectList }) => {
  return (
    <section className="[&>*]:mt-6">
      <Title size="md">
        <h3>پروژه ها</h3>
      </Title>
      <ul>
        {projectList?.map((project) => (
          <li key={project.id}>
            <ProjectCard key={project.id} {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvProjectList
