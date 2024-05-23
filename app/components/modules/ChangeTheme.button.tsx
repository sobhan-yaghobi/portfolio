import React from "react"
import { Moon, Sun } from "lucide-react"

const ChangeThemeButton = () => {
  return (
    <label className="swap swap-rotate btn btn-ghost btn-sm">
      <input type="checkbox" className="theme-controller" value={"light"} />
      <Sun className="icon swap-off" />
      <Moon className="icon swap-on" />
    </label>
  )
}

export default ChangeThemeButton
