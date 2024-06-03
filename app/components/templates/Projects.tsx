import React from "react"
import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"

const Projects: React.FC = () => {
  return (
    <>
      <div className="mt-20" />
      <Title size="lg" className="text-center">
        <h2>Projects</h2>
      </Title>
      <div className="grid place-items-center grid-cols-1 gap-y-10 my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  )
}

export default Projects
