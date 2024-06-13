"use client"

import gsap from "gsap"
import React from "react"

type ScrollToProps = { scrollTo: string | number; duration?: gsap.TweenValue }

const ScrollTo: React.FC<React.PropsWithChildren<ScrollToProps>> = ({
  children,
  scrollTo,
  duration = 1,
}) => {
  const scrollToAction = () => {
    gsap.to(window, { scrollTo, duration })
  }
  return <div onClick={scrollToAction}>{children}</div>
}

export default ScrollTo
