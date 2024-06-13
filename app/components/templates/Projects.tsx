import React from "react"
import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"

const Projects: React.FC = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Projects</h2>
        <h3 className="w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore expedita
          necessitatibus harum. Voluptatibus, harum.
        </h3>
      </Title>
      <div className="flex gap-10 my-12 lg:grid lg:grid-cols-3 xl:grid-cols-4 max-lg:overflow-x-auto">
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
