import { TypeProject } from "./project.type"

export type TypeSkill = {
  id: string
  name: string
  image: string
  link: string
  description: string
  projectList: TypeProject[]
}
