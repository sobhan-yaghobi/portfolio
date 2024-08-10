import React from "react"

import {
  TypeProjectCardButtonDialogProps,
  TypeProjectCardDialogProps,
} from "@/lib/types/project.type"

import ProjectCardButtonList from "./ProjectCardButtonList"
import ProjectCardTitle from "./ProjectCardTitle"

export const ProjectCardButtonDialog: React.FC<TypeProjectCardButtonDialogProps> = ({
  modalId,
}) => {
  return (
    <button
      className="btn btn-sm btn-link p-0 justify-start"
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
      <div className="modal-box bg-base-200">
        <ProjectCardTitle title={project.title} />
        <p className="py-4">{project.description}</p>
        <div className="flex flex-col items-center gap-3">
          <ProjectCardButtonList link={project.link} source={project.source} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>بستن</button>
      </form>
    </dialog>
  )
}
