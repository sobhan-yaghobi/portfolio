"use client"

import React from "react"
import t from "@/messages/fa.json"
import { isUserUseMobile } from "@/lib/utils"

import { useEffect, useState } from "react"

import { Phone } from "lucide-react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import CopyToClipboard from "../modules/CopyToClipboard"

type ContactMeButtonProps = {
  className?: string
  value?: "_PHONE" | string
}

const ContactMeButton: React.FC<ContactMeButtonProps> = ({ className, value }) => {
  const phoneNumber = "+98 939 600 7232"
  const { utils } = t
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
      : utils.contact

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
      <span className="dir-left">{text}</span>
      <Phone className="icon" />
    </CopyToClipboard>
  )
}

export default ContactMeButton
