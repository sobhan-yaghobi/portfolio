import { TypeProfile } from "./profile"
import { TypeProject } from "./project.type"
import { TypeTechnicalSkill } from "./technicalSkill.type"
import { TypeSoftSkill } from "./softSkill.type"

export type TypeCv = {
  technicalSkillList: TypeTechnicalSkill[] | undefined
  softSkillList: TypeSoftSkill[] | undefined
  projectList: TypeProject[] | undefined
}

export type TypeCvProjectListProps = {
  projectList: TypeProject[] | undefined
}

export type TypeCvTechnicalSkillProps = {
  technicalSkillList: TypeTechnicalSkill[] | undefined
}

export type TypeCvSoftSkillListProps = {
  softSkillList: TypeSoftSkill[] | undefined
}

export type TypeCvAboutMeProps = {
  bio: string | null
}

export type TypeCvProfileProps = {
  profile: TypeProfile
}

export type TypeProjectCardForCvProps = {
  project: TypeProject
}
