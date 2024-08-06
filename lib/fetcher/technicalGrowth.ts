import { env } from "process"
import { TypeTechnicalGrowth } from "../types/technicalGrowth.type"

export const getTechnicalGrowthList = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/technicalgrowth`, {
      next: { revalidate: 60 },
    })
    const technicalGrowthList = (await res.json()) as TypeTechnicalGrowth[]
    return technicalGrowthList
  } catch (error) {
    return [] as TypeTechnicalGrowth[]
  }
}
