import { TypeProfile } from "./Profile"
import { TypeProject } from "./Project"
import { TypeTechnicalSkill } from "./TechnicalSkill"
import { TypeSoftSkill } from "./SoftSkill"

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
