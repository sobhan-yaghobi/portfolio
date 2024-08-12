import { TypeProfile } from "./profile"
import { TypeProject } from "./project.type"
import { TypeSkill } from "./skill.type"
import { TypeSoftSkill } from "./softSkill.type"

export type TypeCv = {
  technicalSkillList: TypeSkill[]
  softSkillList: TypeSoftSkill[]
  projectList: TypeProject[]
}

export type TypeCvProjectListProps = {
  projectList: TypeProject[]
}

export type TypeCvTechnicalSkillProps = {
  technicalSkillList: TypeSkill[]
}

export type TypeCvSoftSkillListProps = {
  softSkillList: TypeSoftSkill[]
}

export type TypeCvAboutMeProps = {
  bio: string | null
}

export type TypeCvProfileProps = {
  profile: TypeProfile
}
