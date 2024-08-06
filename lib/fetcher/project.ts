import { env } from "process"
import { TypeProject } from "../types/project.type"

export const getProjectList = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/project`, {
      next: { revalidate: 60 },
    })
    const projectList = (await res.json()) as TypeProject[]
    return projectList
  } catch (error) {
    return [] as TypeProject[]
  }
}
