import { env } from "process"
import { TypeProfile } from "../types/profile"

export const getProfile = async () => {
  try {
    if (!env.NEXT_PUBLIC_API_URL) return {} as TypeProfile

    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/profile`)
    const profile = (await res.json()) as TypeProfile
    return profile
  } catch (error) {
    return {} as TypeProfile
  }
}
