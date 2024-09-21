import gsap from "gsap"
import { TypeTimeLine } from "../types/Utils"

export const createTimeline = (
  trigger?: gsap.DOMTarget,
  start?: string | number,
  end?: string | number
): TypeTimeLine => gsap.timeline({ scrollTrigger: { trigger, start, end } })
