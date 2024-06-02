"use client"

import React from "react"
import { isUserUseMobile } from "@/utils/utils.function"

import { useEffect, useState } from "react"
import { useTranslations } from "use-intl"

import { ClipboardCheck, Phone } from "lucide-react"

import Link from "next/link"

const ContactMeButton: React.FC = () => {
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
    <Link className="btn btn-primary" href={`tel:${phoneNumber}`}>
      {t("quickAccessButton.contact")}
      <Phone className="icon" />
    </Link>
  ) : (
    <button disabled={isClipboard} onClick={saveClipboardAction} className="btn btn-primary">
      {isClipboard ? (
        <>
          {t("quickAccessButton.contactSaveSuccess")}
          <ClipboardCheck className="icon" />
        </>
      ) : (
        <>
          {t("quickAccessButton.contact")}
          <Phone className="icon" />
        </>
      )}
    </button>
  )
}

export default ContactMeButton
