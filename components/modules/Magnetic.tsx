"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { magneticAnimate } from "@/lib/animation/magnetic"

import { TypeMagneticProps } from "@/lib/types/utils"

const Magnetic: React.FC<TypeMagneticProps> = ({ children, magnetSize }) => {
  const magnetic = useRef<HTMLElement>(null)

  useGSAP(() => magneticAnimate(magnetic.current, magnetSize), [])

  return React.cloneElement(children, { ref: magnetic })
}

export default Magnetic
