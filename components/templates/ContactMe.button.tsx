"use client"

import React from "react"
import { isUserUseMobile } from "@/utils/function"

import { useEffect, useState } from "react"
import { useTranslations } from "use-intl"

import { Phone } from "lucide-react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import CopyToClipboard from "../modules/CopyToClipboard"

type ContactMeButtonProps = {
  className?: string
  value?: "_PHONE" | string
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ className, value }) => {
  const phoneNumber = "+98 9396007232"
  const t = useTranslations("heroSection")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent ?? ""
    setIsMobile(isUserUseMobile(userAgent))
  }, [])

  const text =
    typeof value !== "undefined" && value === "_PHONE"
      ? phoneNumber
      : typeof value === "string"
      ? value
      : t("quickAccessButton.contact")

  if (isMobile) {
    return (
      <Link className={cn("flex items-center gap-2", className)} href={`tel:${phoneNumber}`}>
        <span>{text}</span>
        <Phone className="icon" />
      </Link>
    )
  }
  return (
    <CopyToClipboard
      type="text"
      value={phoneNumber}
      className={cn("flex items-center gap-2", className)}
    >
      <span>{text}</span>
      <Phone className="icon" />
    </CopyToClipboard>
  )
}

export default ContactMeButton
