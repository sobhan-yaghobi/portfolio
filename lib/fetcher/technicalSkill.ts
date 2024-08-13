import { env } from "process"
import { TypeTechnicalSkill } from "../types/technicalSkill.type"

export const getTechnicalSkillList = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/technicalSkill?projectListInclude=true`, {
      next: { revalidate: 60 },
    })
    const projectList = (await res.json()) as TypeTechnicalSkill[]
    return projectList
  } catch (error) {
    return [] as TypeTechnicalSkill[]
  }
}
