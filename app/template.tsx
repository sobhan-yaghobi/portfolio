"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { animatePageIn } from "@/utils/utils.animation"

const template: React.FC<React.PropsWithChildren> = ({ children }) => {
  let smoother = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    animatePageIn()
  }, [])
  return (
    <div>
      <div id="banner" className="w-full min-h-screen bg-[#0f0616] fixed top-0 left-0 z-50"></div>
      <div ref={smoother}>{children}</div>
    </div>
  )
}

export default template
