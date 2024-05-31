import React from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/utils/utils.function"

type ChangeThemeButtonProps = {
  className?: string
}

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ className }) => {
  return (
    <label className={cn(`swap swap-rotate btn btn-ghost btn-sm`, className)}>
      <input type="checkbox" className="theme-controller" value={"light"} />
      <Sun className="icon swap-off" />
      <Moon className="icon swap-on" />
    </label>
  )
}

export default ChangeThemeButton
