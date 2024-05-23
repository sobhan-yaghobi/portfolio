"use client"

import React, { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "@/utils/utils.function"

import { Moon, Sun } from "lucide-react"

const ChangeThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const updateHtmlTheme = (theme: string) =>
    document.querySelector("html")!.setAttribute("data-theme", theme)

  const changeThemeAction = () => {
    setIsDarkTheme((prev) => {
      const isDark = !prev
      updateHtmlTheme(!isDark ? "light" : "dark")
      setLocalStorage("darkTheme", JSON.stringify(isDark))
      return isDark
    })
  }
  useEffect(() => {
    const themeLocalStorage = JSON.parse(getLocalStorage("darkTheme") as string)
    if (typeof themeLocalStorage === "boolean") {
      if (themeLocalStorage) {
        setIsDarkTheme(true)
        updateHtmlTheme("dark")
      } else {
        setIsDarkTheme(false)
        updateHtmlTheme("light")
        console.log("update")
      }
    } else setLocalStorage("darkTheme", JSON.stringify(true))
  }, [])

  return (
    <button className="btn btn-ghost btn-sm" onClick={changeThemeAction}>
      {isDarkTheme ? <Sun className="icon" /> : <Moon className="icon" />}
    </button>
  )
}

export default ChangeThemeButton
