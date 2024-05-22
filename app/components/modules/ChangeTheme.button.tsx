import { Sun } from "lucide-react"
import React from "react"

const ChangeThemeButton = () => {
  return (
    <button tabIndex={0} className="btn btn-ghost btn-sm">
      <Sun className="icon" />
    </button>
  )
}

export default ChangeThemeButton
