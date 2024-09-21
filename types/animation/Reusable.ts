import { reusableAnimations } from "@/animation/reusable/reusableAnimations"

export type TypeTarget = gsap.TweenTarget
export type TypeDuration = gsap.TweenValue
export type TypeDelay = gsap.TweenValue

export type TypeReusableAnimations = keyof typeof reusableAnimations

export type TypeReusableAnimationParams = {
  [name: string]: (params: TypeAnimationUtilParam) => void
}

export type TypeAnimationUtilParam = {
  target: TypeTarget
  duration?: TypeDuration
  delay?: TypeDelay
}

export type TypeReusableAnimateProps = {
  className?: string
  selectedAnimationName: TypeReusableAnimations
} & Omit<TypeAnimationUtilParam, "target">
