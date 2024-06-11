import React from "react"
import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"

const Projects: React.FC = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Projects</h2>
      </Title>
      <div className="flex overflow-x-auto gap-10 my-12 lg:grid lg:grid-cols-3 xl:grid-cols-4">
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
