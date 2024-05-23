"use client"

import React, { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "@/utils/utils.function"

import { Moon, Sun } from "lucide-react"

const ChangeThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const changeThemeAction = () => {
    setIsDarkTheme((prev) => {
      const isDark = !prev
      document.querySelector("html")!.setAttribute("data-theme", !isDark ? "light" : "dark")
      setLocalStorage("darkTheme", JSON.stringify(isDark))
      return isDark
    })
  }
  useEffect(() => {
    const themeLocalStorage = JSON.parse(getLocalStorage("darkTheme") as string)
    if (themeLocalStorage) {
      if (themeLocalStorage) setIsDarkTheme(true)
      else setIsDarkTheme(false)
    } else setLocalStorage("darkTheme", JSON.stringify(true))
  }, [])

  return (
    <button tabIndex={0} className="btn btn-ghost btn-sm" onClick={changeThemeAction}>
      {isDarkTheme ? <Sun className="icon" /> : <Moon className="icon" />}
    </button>
  )
}

export default ChangeThemeButton
