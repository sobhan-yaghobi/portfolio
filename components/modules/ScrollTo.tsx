"use client"

import gsap from "gsap"
import React from "react"

import { TypeScrollToProps } from "@/lib/types/utils"

const ScrollTo: React.FC<React.PropsWithChildren<TypeScrollToProps>> = ({
  children,
  scrollToElement,
  duration = 1,
  className,
}) => {
  const scrollTo = () => {
    gsap.to(window, { scrollTo: scrollToElement, duration })
  }
  return (
    <button className={className} onClick={scrollTo}>
      {children}
    </button>
  )
}

export default ScrollTo
