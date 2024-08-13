"use client"

import React from "react"
import { useEffect, useState } from "react"
import { isUserUseMobile } from "@/lib/utils"
import { cn } from "@/lib/utils"

import { TypeContactMeButtonProps } from "@/lib/types/utils"

import { Phone } from "lucide-react"

import Link from "next/link"
import CopyToClipboard from "../modules/CopyToClipboard"

const ContactMeButton: React.FC<TypeContactMeButtonProps> = ({
  phoneNumber,
  text,
  disableIcon,
  className,
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent ?? ""
    setIsMobile(isUserUseMobile(userAgent))
  }, [])

  const MainText = text || phoneNumber

  if (isMobile) {
    return (
      <Link className={cn("flex items-center gap-2", className)} href={`tel:${phoneNumber}`}>
        <span>{MainText}</span>
        {!disableIcon && <Phone className="icon" />}
      </Link>
    )
  }

  return (
    <CopyToClipboard value={phoneNumber} className={cn("flex items-center gap-2", className)}>
      <span className="dir-left">{MainText}</span>
      {!disableIcon && <Phone className="icon" />}
    </CopyToClipboard>
  )
}

export default ContactMeButton
