"use client"

import { animatePageIn } from "@/utils/utils.animation"
import { useGSAP } from "@gsap/react"
import React, { useEffect } from "react"

const template: React.FC<React.PropsWithChildren> = ({ children }) => {
  useGSAP(() => {
    animatePageIn()
  }, [])
  return (
    <div>
      <div id="banner" className="w-full min-h-screen bg-[#0f0616] fixed top-0 left-0 z-50"></div>
      <div>{children}</div>
    </div>
  )
}

export default template
