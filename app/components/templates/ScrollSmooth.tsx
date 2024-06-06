"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import React from "react"

const ScrollSmooth: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default ScrollSmooth
