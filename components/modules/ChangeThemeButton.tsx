"use client"

import React, { useLayoutEffect } from "react"
import useTheme from "@/hooks/store/useTheme"
import { cn } from "@/lib/utils"

import { ChangeThemeButtonProps } from "@/lib/types/utils"

import { Moon, Sun } from "lucide-react"

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  useLayoutEffect(() => {
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
