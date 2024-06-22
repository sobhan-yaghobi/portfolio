import { locales } from "@/utils/variable"
import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

export default getRequestConfig(async () => {
  const locale = cookies().get("NEXT_LOCALE")?.value
  //! For Set Default Language If User Using NotSupported Language
  const mainLocale =
    locale && locales.includes(locale) ? locale : (process.env.NEXT_PUBLIC_DEF_LANGUAGE as string)

  return {
    locale: mainLocale,
    messages: (await import(`@/messages/${mainLocale}.json`)).default,
  }
})
