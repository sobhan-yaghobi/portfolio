import Image from "next/image"
import React from "react"

const ProjectCardForCv: React.FC = () => {
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

export default ProjectCardForCv
