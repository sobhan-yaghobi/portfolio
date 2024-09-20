import { ReactElement, ReactNode } from "react"
import { TypeSocialMedia } from "./SocialMedia"

export type TypeTimeLine = gsap.core.Timeline

export type ChangeThemeButtonProps = {
  className?: string
}

export type TypeCopyToClipboardProps = {
  value: string
  className?: string
}

export type TypeEmailProps = {
  email: string
  disableIcon?: boolean
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

export type TypeSocialFollowBoxProps = {
  socialMedia: TypeSocialMedia
}

export type TypeTitleProps = {
  id?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  isIcon?: boolean
}

export type TypeIndicatorProps = {
  className?: string
}

export type TypeDesktopNavbarProps = {
  menuList: { href: string; title: string; isSoon: boolean }[]
}

export type TypeContactMeButtonProps = {
  phoneNumber: string
  text?: string
  disableIcon?: boolean
  className?: string
}
