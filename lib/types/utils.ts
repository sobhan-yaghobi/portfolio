import { ReactElement } from "react"

export type TypeTimeLine = gsap.core.Timeline

export type ChangeThemeButtonProps = {
  className?: string
}

export type TypeCopyToClipboardProps = {
  value: string
  className?: string
}

export type TypeEmailProps = {
  className?: string
}

export type TypeMagneticProps = {
  children: ReactElement
  magnetSize?: number
}

export type TypeScrollToProps = {
  scrollToElement: string | number
  duration?: gsap.TweenValue
  className?: string
}
