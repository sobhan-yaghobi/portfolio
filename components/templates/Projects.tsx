import React from "react"
import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"

const Projects: React.FC = async () => {
  return (
    <section>
      <Title size="lg" className="text-center">
        <h2>Projects</h2>
        <h3 className="w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore expedita
          necessitatibus harum. Voluptatibus, harum.
        </h3>
      </Title>
      <div className="my-12 flex gap-10 max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <ProjectCard key={index} />
          ))}
      </div>
    </section>
  )
}

export default Projects
