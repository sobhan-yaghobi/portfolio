import { env } from "process"
import { TypeSocialMedia } from "../types/socialMedia"

export const getSocialMediaList = async () => {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/socialMedia`, {
      next: { revalidate: 60 },
    })
    const socialMediaList = (await res.json()) as TypeSocialMedia[]
    return socialMediaList
  } catch (error) {
    return [] as TypeSocialMedia[]
  }
}
