"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import React from "react"

const ScrollSmooth: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </>
  )
}

export default ScrollSmooth
