import { TypeSkill } from "./skill.type"

export type TypeProject = {
  id: string
  image: string
  title: string
  link: string
  source: string
  description: string
  skillList: TypeSkill[]
}
