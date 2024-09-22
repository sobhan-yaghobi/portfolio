import React from "react"

import { TypeProjectCardTitleProps } from "@/types/Project"

export const ProjectCardTitle: React.FC<TypeProjectCardTitleProps> = ({ title }) => {
  return (
    <h3
      style={{ lineHeight: "1.5em", maxHeight: "3em" }}
      className="text-xl font-dana overflow-hidden"
    >
      {title}
    </h3>
  )
}

export default ProjectCardTitle
