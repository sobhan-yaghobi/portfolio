import React from "react"

import { TypeProjectCardButtonDialogProps, TypeProjectCardDialogProps } from "@/types/Project"

import ProjectCardButtonList from "./ProjectCardButtonList"
import ProjectCardTitle from "./ProjectCardTitle"

export const ProjectCardButtonDialog: React.FC<TypeProjectCardButtonDialogProps> = ({
  modalId,
}) => {
  return (
    <button
      className="block btn btn-sm btn-link p-0 justify-start"
      onClick={() => {
        if (document) {
          const element = document.getElementById(modalId) as HTMLFormElement
          element.showModal()
        }
      }}
    >
      بهتر ببین
    </button>
  )
}

export const ProjectCardDialog: React.FC<TypeProjectCardDialogProps> = ({ project, modalId }) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-base-200 flex flex-col gap-3">
        <ProjectCardTitle title={project.title} />
        <p>{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project?.technicalSkillList?.map((skill) => (
            <li key={skill.id} className="badge">
              {skill.name}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ProjectCardButtonList link={project.link} source={project.source} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>بستن</button>
      </form>
    </dialog>
  )
}
