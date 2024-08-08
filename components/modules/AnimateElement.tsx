"use client"

import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { animation, delay, duration, gsapAnimation } from "@/lib/animation"

type TypeAnimateElementProps = {
  duration?: duration
  delay?: delay
  animation: animation
  className?: string
}

const AnimateElement: React.FC<React.PropsWithChildren<TypeAnimateElementProps>> = ({
  duration,
  delay,
  animation,
  children,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const mainAnimation = gsapAnimation[animation]

  useGSAP(() => {
    if (elementRef.current) mainAnimation({ target: elementRef.current, duration, delay })
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default AnimateElement
