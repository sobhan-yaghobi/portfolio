import { env } from "process"
import { TypeProfile } from "../types/profile"

export const getProfile = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/profile`, {
      next: { revalidate: 60 },
    })
    const profile = (await res.json()) as TypeProfile
    return profile
  } catch (error) {
    return {} as TypeProfile
  }
}
