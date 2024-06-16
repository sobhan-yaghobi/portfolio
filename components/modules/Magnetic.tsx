"use client"

import React, { ReactElement, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type MagneticProps = {
  children: ReactElement
  magnetSize?: number
}
const Magnetic: React.FC<MagneticProps> = ({ children, magnetSize }) => {
  const magnetic = useRef<HTMLElement>(null)

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1,0.6)" })
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1,0.6)" })

    magnetic.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = magnetic.current?.getBoundingClientRect() as DOMRect

      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)

      xTo(x * (magnetSize ? magnetSize : 0.5))
      yTo(y * (magnetSize ? magnetSize : 0.5))
    })
    magnetic.current?.addEventListener("mouseleave", () => {
      xTo(0)
      yTo(0)
    })
  }, [])

  return React.cloneElement(children, { ref: magnetic })
}

export default Magnetic
