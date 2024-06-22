"use client"

import React from "react"
import { cn } from "@/utils/function"

import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

import { Languages } from "lucide-react"

const ChangeLangButton = () => {
  const router = useRouter()
  const locale = useLocale()
  const localChangeAction = (type: string) => {
    const cookie = document.cookie
    const isLangSame = cookie.substring(cookie.indexOf("=") + 1, cookie.length)
    if (isLangSame !== type) {
      document.cookie = `NEXT_LOCALE=${type}; path = / ; max-age : 31536000 ; SameSite = Lax`
      router.refresh()
    }
    return
  }

  const langList = [
    { id: 1, name: "English", value: "en" },
    { id: 2, name: "فارسی", value: "fa", className: "font-iran-sans" },
  ]
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        <Languages className="icon" />
      </div>
      <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-300 mt-3 rounded-box">
        {langList.map((lang) => (
          <li
            key={lang.id}
            onClick={() => localChangeAction(lang.value)}
            className={cn(
              `tooltip ${lang.value === locale && "bg-neutral-500/30 rounded-md"}`,
              lang.className
            )}
          >
            <a>{lang.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChangeLangButton
