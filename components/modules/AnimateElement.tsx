"use client"

import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { TypeAnimationList, TypeAnimationUtilParam } from "@/lib/types/animation"
import { animationList } from "@/lib/animation/utils"

type TypeAnimateElementProps = {
  className?: string
  selectedAnimationName: TypeAnimationList
} & Omit<TypeAnimationUtilParam, "target">

const AnimateElement: React.FC<React.PropsWithChildren<TypeAnimateElementProps>> = ({
  duration,
  delay,
  children,
  selectedAnimationName,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const selectedAnimation = animationList[selectedAnimationName]

  useGSAP(() => {
    if (elementRef.current) selectedAnimation({ target: elementRef.current, duration, delay })
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default AnimateElement
