import gsap from "gsap"
import { TypeAnimationUtilParam } from "../types/animation"
import { projectAnimate } from "./projectList"
import { landingAnimate as homeLandingAnimate } from "./homeLanding"

const fadeInUpAnimate = ({ target, duration, delay }: TypeAnimationUtilParam) => {
  gsap.fromTo(
    target,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ...(duration && { duration }), ...(delay && { delay }) }
  )
}

export const animationList = {
  fadeInUp: fadeInUpAnimate,
  animateHomeLanding: homeLandingAnimate,
  animateProjectList: projectAnimate,
}
