"use client"

import React from "react"

import { useGSAP } from "@gsap/react"
import { animation, delay, duration, gsapAnimation, target } from "@/utils/animation"

type GsapProps = {
  target: target
  duration?: duration
  delay?: delay
  animation: animation
  dep?: unknown[]
}

const Gsap: React.FC<React.PropsWithChildren<GsapProps>> = ({
  target,
  duration,
  delay,
  animation,
  dep,
  children,
}) => {
  const mainAnimation = gsapAnimation[animation]
  useGSAP(() => mainAnimation({ target, duration, delay }), dep ? dep : [])
  return <>{children}</>
}

export default Gsap
