import { TypeProject } from "./Project"

export type TypeTechnicalSkill = {
  id: string
  name: string
  image: string
  link: string
  description: string
  projectList?: TypeProject[]
  experienceYearTime: string
}

export type TypeTechnicalSkillsProps = {
  technicalSkillList: TypeTechnicalSkill[]
}
