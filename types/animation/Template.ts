import { templateAnimations } from "@/animation/template/templateAnimations"

export type TypeTemplateAnimations = keyof typeof templateAnimations

export type TypeTemplateAnimateProps = {
  className?: string
  selectedAnimationName: TypeTemplateAnimations
}
