"use client"

import React, { useRef } from "react"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { pageInAnimate } from "@/lib/animation/pageTransition"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, ScrollToPlugin)

const template: React.FC<React.PropsWithChildren> = ({ children }) => {
  let smoother = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    window.scrollTo(0, 0)
    pageInAnimate()
  }, [])
  return (
    <div>
      <div id="banner" className="bg-black w-full min-h-screen fixed top-0 left-0 z-50"></div>
      <div ref={smoother}>{children}</div>
    </div>
  )
}

export default template
