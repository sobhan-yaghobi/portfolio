import gsap from "gsap"
import { TypeAnimationUtilParam } from "../types/animation"
import { projectAnimate } from "./projectList"
import { landingAnimate as homeLandingAnimate } from "./homeLanding"
import { technicalGrowthListAnimate } from "./technicalGrowthList"
import { TypeTimeLine } from "../types/utils"

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
  animateTechnicalGrowthList: technicalGrowthListAnimate,
}

export const createTimeline = (trigger: gsap.DOMTarget, start: string): TypeTimeLine =>
  gsap.timeline({ scrollTrigger: { trigger, start } })
