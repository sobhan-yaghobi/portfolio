"use client"

import React, { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type ChangeThemeButtonProps = {
  className?: string
}

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ className }) => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", isLight ? "light" : "dark")
  }, [isLight])
  return (
    <label className={cn(`swap swap-rotate btn btn-ghost btn-sm`, className)}>
      <input
        type="checkbox"
        className="theme-controller"
        checked={isLight}
        onChange={(e) => setIsLight(Boolean(e.target.checked))}
      />
      <Sun className="icon swap-off" />
      <Moon className="icon swap-on" />
    </label>
  )
}

export default ChangeThemeButton
