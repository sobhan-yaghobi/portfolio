"use client"

import React from "react"
import { TypeProject } from "@/lib/types/project.type"
import { getWords } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProjectCard: React.FC<TypeProject> = ({
  id,
  image,
  title,
  link,
  source,
  description,
  skillList,
}) => {
  const isModalSupported = description !== getWords(description, 25)

  return (
    <div className="card bg-base-200 flex-1 min-w-72 max-w-full h-[450px] shadow-xl">
      <figure className="h-52 p-2">
        <div className="!bg-base-300 w-full h-full min-size-60 flex items-center justify-center rounded-xl overflow-hidden">
          <Image
            width={300}
            height={300}
            src={image}
            className="w-auto h-full object-cover"
            alt="project-image"
          />
        </div>
      </figure>
      <div className="card-body px-3 py-4 justify-between">
        <TitleCard title={title} />
        <section className="flex-1">
          <p className="h-24 overflow-hidden">
            {getWords(description, 25)}
            {isModalSupported && <>...</>}
          </p>
          {isModalSupported && (
            <button
              className="btn btn-sm btn-link p-0 justify-start"
              onClick={() => {
                if (document) {
                  ;(document.getElementById("my_modal_2") as HTMLFormElement).showModal()
                }
              }}
            >
              بهتر ببین
            </button>
          )}
        </section>
        <div className="flex gap-3 [&>*]:flex-1">
          <FooterButton link={link} source={source} />
        </div>
      </div>
      {isModalSupported && (
        <>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-base-200">
              <TitleCard title={title} />
              <p className="py-4">{description}</p>
              <div className="flex flex-col items-center gap-3">
                <FooterButton link={link} source={source} />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>بستن</button>
            </form>
          </dialog>
        </>
      )}
    </div>
  )
}

type TitleCardProps = Pick<TypeProject, "title">

export const TitleCard: React.FC<TitleCardProps> = ({ title }) => {
  return (
    <h3
      style={{ lineHeight: "1.5em", maxHeight: "3em" }}
      className="text-xl font-dana overflow-hidden"
    >
      {title}
    </h3>
  )
}

type FooterButtonProps = Pick<TypeProject, "link" | "source">

export const FooterButton: React.FC<FooterButtonProps> = ({ link, source }) => {
  return (
    <>
      {source && (
        <Link href={source}>
          <button className="size-full btn btn-sm btn-primary">
            سورس کد
            <ArrowUpRight />
          </button>
        </Link>
      )}

      {link && (
        <Link href={link}>
          <button className="size-full btn btn-sm">
            پروژه
            <ArrowUpRight />
          </button>
        </Link>
      )}
    </>
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
