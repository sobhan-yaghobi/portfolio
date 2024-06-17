"use client"

import React, { Fragment } from "react"
import { isUserUseMobile } from "@/utils/utils.function"

import { useEffect, useState } from "react"
import { useTranslations } from "use-intl"

import { ClipboardCheck, Phone } from "lucide-react"

import Link from "next/link"
import { cn } from "@/lib/utils"

type ContactMeButtonProps = {
  className?: string
  text?: "PHONE" | string
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ className, text }) => {
  const phoneNumber = "+98 9396007232"
  const t = useTranslations("heroSection")
  const [isMobile, setIsMobile] = useState(false)
  const [isClipboard, setIsClipboard] = useState(false)
  const saveClipboardAction = async () => {
    await window.navigator.clipboard.writeText(phoneNumber)
    setIsClipboard(true)
    setTimeout(() => {
      setIsClipboard(false)
    }, 2000)
  }

  useEffect(() => {
    const userAgent = window.navigator.userAgent ?? ""
    setIsMobile(isUserUseMobile(userAgent))
  }, [])

  const Text =
    typeof text !== "undefined" && text === "PHONE"
      ? phoneNumber
      : typeof text === "string"
      ? text
      : t("quickAccessButton.contact")

  return isMobile ? (
    <Link className={cn("flex items-center gap-2", className)} href={`tel:${phoneNumber}`}>
      <span>{Text}</span>
      <Phone className="icon" />
    </Link>
  ) : (
    <button
      disabled={isClipboard}
      onClick={saveClipboardAction}
      className={cn("flex items-center gap-2", className)}
    >
      {isClipboard ? (
        <>
          {t("quickAccessButton.contactSaveSuccess")}
          <ClipboardCheck className="icon" />
        </>
      ) : (
        <>
          <span>{Text}</span>
          <Phone className="icon" />
        </>
      )}
    </button>
  )
}

export default ContactMeButton
