"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { TypeTemplateAnimateProps } from "@/types/animation/Template"

import { templateAnimations } from "@/animation/template/templateAnimations"

const AnimateElement: React.FC<React.PropsWithChildren<TypeTemplateAnimateProps>> = ({
  children,
  selectedAnimationName,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const selectedAnimation = templateAnimations[selectedAnimationName]

  useGSAP(() => {
    if (elementRef.current) selectedAnimation()
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default AnimateElement
