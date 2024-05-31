"use client"

import React from "react"

import { Languages } from "lucide-react"
import { useRouter } from "next/navigation"

const ChangeLangButton = () => {
  const router = useRouter()
  const localChangeAction = (type: string) => {
    const cookie = document.cookie
    const isLangSame = cookie.substring(cookie.indexOf("=") + 1, cookie.length)
    if (isLangSame !== type) {
      document.cookie = `NEXT_LOCALE=${type}; path = / ; max-age : 31536000 ; SameSite = Lax`
      router.refresh()
    }
    return
  }
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        <Languages className="icon" />
      </div>
      <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-300 mt-3 rounded-box">
        <li onClick={() => localChangeAction("en")} className="tooltip">
          <a>English</a>
        </li>
        <li onClick={() => localChangeAction("fa")} className="tooltip iran-sans">
          <a>فارسی</a>
        </li>
      </ul>
    </div>
  )
}

export default ChangeLangButton
