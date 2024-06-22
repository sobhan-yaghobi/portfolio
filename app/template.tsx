"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip"
import ScrollTrigger from "gsap/ScrollTrigger"
import { animatePageIn } from "@/utils/animation"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, ScrollToPlugin)

const template: React.FC<React.PropsWithChildren> = ({ children }) => {
  let smoother = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    window.scrollTo(0, 0)
    animatePageIn()
  }, [])
  return (
    <div>
      <div id="banner" className="bg-[#0f0616] w-full min-h-screen fixed top-0 left-0 z-50"></div>
      <div ref={smoother}>{children}</div>
    </div>
  )
}

export default template
