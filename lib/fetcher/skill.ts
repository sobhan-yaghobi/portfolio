import { env } from "process"
import { TypeSkill } from "../types/skill.type"

export const getSkillList = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/skill?projectListInclude=true`, {
      next: { revalidate: 60 },
    })
    const projectList = (await res.json()) as TypeSkill[]
    return projectList
  } catch (error) {
    return [] as TypeSkill[]
  }
}
