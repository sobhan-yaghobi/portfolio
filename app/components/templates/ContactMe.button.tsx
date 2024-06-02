"use client"

import { isUserUseMobile } from "@/utils/utils.function"
import { Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslations } from "use-intl"

const ContactMeButton = () => {
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations("heroSection")

  useEffect(() => {
    const userAgent = window.navigator.userAgent ?? ""
    setIsMobile(isUserUseMobile(userAgent))
  }, [])

  return isMobile ? (
    <Link className="btn btn-primary" href="tel:09396007232">
      {t("quickAccessButton.contact")}
      <Phone className="icon" />
    </Link>
  ) : (
    <button className="btn btn-primary">
      {t("quickAccessButton.contact")}
      <Phone className="icon" />
    </button>
  )
}

export default ContactMeButton
