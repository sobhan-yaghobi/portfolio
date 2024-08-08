"use client"

import React, { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

import useTheme from "@/hooks/store/useTheme"

type ChangeThemeButtonProps = {
  className?: string
}

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme)
  }, [theme])
  return (
    <label className={cn(`swap swap-rotate btn btn-ghost btn-sm`, className)}>
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "light"}
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
      />
      <Sun className="icon swap-off" />
      <Moon className="icon swap-on" />
    </label>
  )
}

export default ChangeThemeButton
