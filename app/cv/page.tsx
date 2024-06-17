import React from "react"

import Email from "@/components/modules/Email"
import Title from "@/components/modules/Title"
import ContactMeButton from "@/components/templates/ContactMe.button"

import { MapPin } from "lucide-react"

const page: React.FC = () => {
  return (
    <div className="px-60 py-12">
      <div className="bg-black/50 w-full p-12 rounded-xl relative overflow-hidden">
        <div className="w-full h-52 flex absolute -top-10 -translate-x-1/2 left-1/2 -z-10">
          <div className="bg-primary w-full h-96 blur-3xl rounded-full"></div>
          <div className="bg-primary w-full h-52 blur-3xl absolute" />
          <div className="bg-primary w-full h-96 blur-3xl rounded-full"></div>
        </div>
        <div className="flex items-center justify-between flex-col gap-6">
          <div className="size-60 bg-neutral rounded-full" />
          <Title size="lg">
            <h1>Sobhan Yaghobi</h1>
          </Title>
          <p className="btn btn-primary">Front End Developer</p>
          <ul className="w-full mt-3 flex justify-between items-center">
            <li className="flex items-center gap-2">
              <Email className="*:stroke-primary" />
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="icon stroke-primary" />
              <span>Iran , Khorasan Razavi, Mashhad</span>
            </li>
            <li className="flex items-center gap-2">
              <ContactMeButton className="flex-row-reverse *:stroke-primary" text="PHONE" />
            </li>
          </ul>
        </div>
        <div className="divider" />
        <div className="flex">
          <div className="w-1/2 *:text-sm [&>*]:mt-12">
            <section>
              <Title size="sm">
                <h3>About Me</h3>
              </Title>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quae fuga tenetur
                numquam sapiente eum temporibus harum saepe. Voluptatem distinctio nemo esse,
                reiciendis ex iusto impedit corrupti alias explicabo blanditiis.
              </p>
            </section>
            <section>
              <Title size="sm">
                <h3>Education</h3>
              </Title>
              <b>Lorem, ipsum.</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </section>
            <section>
              <Title size="sm">
                <h3>Experience</h3>
              </Title>

              <div className="mt-3">
                <h5 className="text-base font-bold">Title 1</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nulla dicta,
                  minima ipsam maiores sed! Excepturi unde recusandae porro distinctio aspernatur
                  eius, corporis iste, laudantium delectus dolor ipsum fugit? Recusandae!
                </p>
              </div>
              <div className="mt-3">
                <h5 className="text-base font-bold">Title 1</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nulla dicta,
                  minima ipsam maiores sed! Excepturi unde recusandae porro distinctio aspernatur
                  eius, corporis iste, laudantium delectus dolor ipsum fugit? Recusandae!
                </p>
              </div>
            </section>
          </div>
          <div className="divider divider-horizontal" />
          <div className="w-1/2 *:text-sm [&>*]:mt-12">
            <section className="[&>*]:mt-6">
              <Title size="sm">
                <h3>Skills & Tools</h3>
              </Title>
              <div className="[&>*]:mt-1">
                <h5 className="text-base font-bold">Designing Softwares</h5>
                <ul>
                  {["Figma"].map((item, index) => (
                    <li key={index} className="badge badge-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="[&>*]:mt-1">
                <h5 className="text-base font-bold">Languages</h5>
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
                    <li key={index} className="badge badge-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
