import { TypeTechnicalSkill } from "./TechnicalSkill"

export type TypeProject = {
  id: string
  image: string
  title: string
  link: string
  source: string
  description: string
  technicalSkillList: TypeTechnicalSkill[]
}

export type TypeProjectCardProps = TypeProject

export type TypeProjectCardTitleProps = Pick<TypeProject, "title">

export type TypeProjectCardButtonListProps = Pick<TypeProject, "link" | "source">

export type TypeProjectCardButtonDialogProps = { modalId: string }

export type TypeProjectCardDialogProps = {
  project: Pick<TypeProject, "title" | "description" | "link" | "source" | "technicalSkillList">
  modalId: string
}
