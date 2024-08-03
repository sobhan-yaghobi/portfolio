import { TypeProject } from "@/lib/types/project.type"
import Image from "next/image"
import React from "react"

const ProjectCard: React.FC<TypeProject> = ({
  id,
  image,
  title,
  link,
  source,
  description,
  skillList,
}) => {
  return (
    <div className="card bg-base-100 flex-1 min-w-72 max-w-full h-96 shadow-xl">
      <figure className="p-2">
        <Image
          width={300}
          height={300}
          src={image}
          className="w-full h-full min-size-60 object-cover rounded-xl"
          alt="project-image"
        />
      </figure>
      <div className="card-body px-3 py-2">
        <h3 className="card-title text-2xl">Hello World</h3>
        <div className="flex justify-between">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-sm btn-primary flex-1">view source</button>
          <button className="btn btn-sm flex-1">see project</button>
        </div>
      </div>
    </div>
  )
}

export const ProjectCvCard = () => {
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
          <h3 className="card-title">Hello World</h3>
          <ul className="flex flex-wrap gap-2">
            {[
              "Javascript",
              "Typescript",
              "React Js",
              "Next Js",
              "Zod",
              "React Hook Form",
              "Material Ui",
              "CSS",
              "SASS",
              "NPM",
              "SupaBase",
              "Vite",
              "Lodash",
              "Prisma",
              "BootStrap",
            ].map((item, index) => (
              <li key={index} className="badge badge-sm">
                {item}
              </li>
            ))}
          </ul>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eum quis aliquam ad,
            quaerat iusto voluptatem suscipit quisquam rerum repudiandae adipisci, saepe eos enim
            eveniet possimus distinctio! Dolores perspiciatis a amet cumque provident harum. Vero
            fugit iure blanditiis facilis possimus? Exercitationem iste corrupti reprehenderit
            dolorem harum nam soluta necessitatibus asperiores.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
