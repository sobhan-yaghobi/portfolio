"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import React from "react"

const ScrollSmooth: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  )
}

export default ScrollSmooth
