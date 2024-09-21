"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { TypeReusableAnimateProps } from "@/types/animation/Reusable"

import { reusableAnimations } from "@/animation/reusable/reusableAnimations"

const ReusableAnimate: React.FC<React.PropsWithChildren<TypeReusableAnimateProps>> = ({
  duration,
  delay,
  children,
  selectedAnimationName,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const selectedAnimation = reusableAnimations[selectedAnimationName]

  useGSAP(() => {
    if (elementRef.current) selectedAnimation({ target: elementRef.current, duration, delay })
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default ReusableAnimate
