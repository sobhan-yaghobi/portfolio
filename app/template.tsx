"use client"

import { gsapAnimation } from "@/utils/utils.animation"
import React, { useEffect } from "react"

const template: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    gsapAnimation.animatePageIn()
  }, [])
  return (
    <div>
      <div id="banner" className="w-full min-h-screen bg-background fixed top-0 left-0 z-50"></div>
      <div>{children}</div>
    </div>
  )
}

export default template
