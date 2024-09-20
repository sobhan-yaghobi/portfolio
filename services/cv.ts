import { env } from "process"
import { TypeCv } from "../types/Cv"

export const getCv = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/cv`)
    const profile = (await res.json()) as TypeCv
    return profile
  } catch (error) {
    return {} as TypeCv
  }
}
