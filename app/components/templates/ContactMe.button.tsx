"use client"

import React from "react"
import { isUserUseMobile } from "@/utils/utils.function"

import { useEffect, useState } from "react"
import { useTranslations } from "use-intl"

import { ClipboardCheck, Phone } from "lucide-react"

import Link from "next/link"
import { cn } from "@/lib/utils"

type ContactMeButtonProps = {
  className?: string
  text?: string
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ className, text }) => {
  const phoneNumber = "09396007232"
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

  return isMobile ? (
    <Link className={cn("btn btn-primary", className)} href={`tel:${phoneNumber}`}>
      {text ? text : t("quickAccessButton.contact")}
      <Phone className="icon" />
    </Link>
  ) : (
    <button
      disabled={isClipboard}
      onClick={saveClipboardAction}
      className={cn("btn btn-primary", className)}
    >
      {isClipboard ? (
        <>
          {t("quickAccessButton.contactSaveSuccess")}
          <ClipboardCheck className="icon" />
        </>
      ) : (
        <>
          {text ? text : t("quickAccessButton.contact")}
          <Phone className="icon" />
        </>
      )}
    </button>
  )
}

export default ContactMeButton
