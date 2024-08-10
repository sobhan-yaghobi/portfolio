import { animationList } from "../animation/utils"

export type TypeTarget = gsap.TweenTarget
export type TypeDuration = gsap.TweenValue
export type TypeDelay = gsap.TweenValue

export type TypeAnimationList = keyof typeof animationList

export type TypeAnimationListParams = {
  [name: string]: (params: TypeAnimationUtilParam) => void
}

export type TypeAnimationUtilParam = {
  target: TypeTarget
  duration?: TypeDuration
  delay?: TypeDelay
}

export type TypeAnimateElementProps = {
  className?: string
  selectedAnimationName: TypeAnimationList
} & Omit<TypeAnimationUtilParam, "target">
