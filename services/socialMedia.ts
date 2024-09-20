import { env } from "process"
import { TypeSocialMedia } from "../types/SocialMedia"

export const getSocialMediaList = async () => {
  try {
    if (!env.NEXT_PUBLIC_API_URL) return [] as TypeSocialMedia[]

    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/socialMedia`)
    const socialMediaList = (await res.json()) as TypeSocialMedia[]
    return socialMediaList
  } catch (error) {
    return [] as TypeSocialMedia[]
  }
}
