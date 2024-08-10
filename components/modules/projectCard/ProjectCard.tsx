"use client"

import React from "react"
import { getWords } from "@/lib/utils"

import { TypeProjectCardProps } from "@/lib/types/project.type"

import Image from "next/image"
import ProjectCardTitle from "./ProjectCardTitle"
import ProjectCardButtonList from "./ProjectCardButtonList"
import { ProjectCardButtonDialog, ProjectCardDialog } from "./ProjectCardDialog"

const ProjectCard: React.FC<TypeProjectCardProps> = ({
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
        <ProjectCardTitle title={title} />
        <section className="flex-1">
          <p className="h-24 overflow-hidden">
            {getWords(description, 25)}
            {isModalSupported && <>...</>}
          </p>
          {isModalSupported && <ProjectCardButtonDialog modalId={id} />}
        </section>
        <div className="flex gap-3 [&>*]:flex-1">
          <ProjectCardButtonList link={link} source={source} />
        </div>
      </div>

      {isModalSupported && (
        <ProjectCardDialog project={{ title, description, link, source }} modalId={id} />
      )}
    </div>
  )
}

export default ProjectCard
