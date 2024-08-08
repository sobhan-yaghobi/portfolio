import gsap from "gsap"
import { TypeAnimationListParams, TypeAnimationUtilParam } from "../types/animation"

const fadeInUpAnimate = ({ target, duration, delay }: TypeAnimationUtilParam) => {
  gsap.fromTo(
    target,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ...(duration && { duration }), ...(delay && { delay }) }
  )
}

export const animationList = {
  fadeInUp: fadeInUpAnimate,
}
